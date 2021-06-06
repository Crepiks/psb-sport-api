import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();

  await knex('users').insert([
    {
      id: 1,
      firstName: 'Sayazhan',
      lastName: 'Onglassyn',
      email: 'sayazhan@mail.ru',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'Sultan',
      lastName: 'Mustafin',
      email: 'sultan@mail.ru',
      password: 'password',
    },
    {
      id: 3,
      firstName: 'Daniar',
      lastName: 'Egeubay',
      email: 'daniar@mail.ru',
      password: 'password',
    },
    {
      id: 4,
      firstName: 'Azat',
      lastName: 'Onglassyn',
      email: 'azat@mail.com',
      password: 'password',
    },
    {
      id: 5,
      firstName: 'Aruzhan',
      lastName: 'Serpen',
      email: 'aruzhan@mail.com',
      password: 'password',
    },
    {
      id: 6,
      firstName: 'Enlik',
      lastName: 'Mustafina',
      email: 'enlik@mail.com',
      password: 'password',
    },
    {
      id: 7,
      firstName: 'Ayazhan',
      lastName: 'Zhanitova',
      email: 'ayazhan@mail.com',
      password: 'password',
    },
    {
      id: 8,
      firstName: 'Dana',
      lastName: 'Romankulova',
      email: 'dana@mail.com',
      password: 'password',
    },
    {
      id: 9,
      firstName: 'Dina',
      lastName: 'Onglassyn',
      email: 'dina@mail.com',
      password: 'password',
    },
    {
      id: 10,
      firstName: 'Lera',
      lastName: 'Opechkina',
      email: 'lera@mail.com',
      password: 'password',
    },
    {
      id: 11,
      firstName: 'Aleksey',
      lastName: 'Popov',
      email: 'aleksey@mail.com',
      password: 'password',
    },
    {
      id: 12,
      firstName: 'Sania',
      lastName: 'Ualihanova',
      email: 'sania@mail.com',
      password: 'password',
    },
  ]);
}
