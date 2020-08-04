import db from '../database/connection';
import { Request, Response } from 'express';
import ConvertHourToMinutes from '../utils/ConvertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  async store(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const insertedUserUsersIds = await db('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUserUsersIds[0];

    const insertedClassesIds = await db('classes').insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((item: ScheduleItem) => {
      return {
        class_id,
        week_day: item.week_day,
        from: ConvertHourToMinutes(item.from),
        to: ConvertHourToMinutes(item.to),
      };
    });

    await db('class_schedule').insert(classSchedule);

    return res.json({ ok: true });
  }
}

export default new ClassesController();
