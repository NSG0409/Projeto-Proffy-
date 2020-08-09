import {Request, Response} from 'express';
import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesControler {
    async index(request: Request, response: Response){
          
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day  as string;
        const time = filters.time as string;
    
         
          if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                error: "Missing filters to search classes"
            });
        }
          
        const timeInMinute = convertHourToMinutes(time);
        
        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinute])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinute])
            })
            .where('classes.subject', '=', subject)
            //inner join
            .join('users', 'classes.users_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);   
    }
    async create (request: Request, response: Response) {
        //Dados do corpo para criarção ou atualizacao
        // console.log(request.body);
        //Identificar qual recurso eu quero atualizar ou deletar pelo parametro
        // console.log(request.params);
        // console.log(request.query);
        

        
        //desitruturando as informações para trabalhar!
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        //variavel transection que tem como objetivo fazer
        //todas as operaçoes de insert ao mesmo tempo
        //e se caso alguma delas falhar eu cancelo todas de uma vez só
        const trx = await db.transaction();
    
        try{
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
        
            const users_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                users_id,
        
            });
            const class_id = insertedClassesIds[0];
            
            const classSchedule = schedule.map((scheduleItem: scheduleItem) =>{
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id,
                }; 
        
            });
        
            await trx('class_schedule').insert(classSchedule);
        
            //momento em que salva tudo
            await trx.commit();
            //status 201 dentro do HTTP significa status criado com sucesso!
            return response.status(201).send();
        }catch(err){
            //desfazendo qualquer alteração se der erro
            trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while new class'
            });
        }
    
    }
}