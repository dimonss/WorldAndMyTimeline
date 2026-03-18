export interface PersonalEvent {
    year: number;
    title: string;
    description: string;
    icon: string;
}

export const personalEvents: PersonalEvent[] = [
    {
        year: 1996,
        title: 'Рождение',
        description: 'Появление на свет — начало пути.',
        icon: '👶',
    },
    {
        year: 2003,
        title: 'Школа',
        description: 'Начало школьного образования — первый стержневой этап.',
        icon: '🏫',
    },
    {
        year: 2012,
        title: 'Колледж',
        description: 'Поступление в колледж — углубление знаний и специализация.',
        icon: '📚',
    },
    {
        year: 2015,
        title: 'ВУЗ — Бакалавриат',
        description: 'Поступление в ВУЗ на бакалавриат — новый уровень образования.',
        icon: '🎓',
    },
    {
        year: 2018,
        title: 'Магистратура',
        description: 'Начало обучения в магистратуре — научные исследования и развитие.',
        icon: '🔬',
    },
    {
        year: 2020,
        title: 'Beeline — Разработчик',
        description:
            'Должность фронтенд / бэкенд разработчика в крупной IT-компании Beeline.',
        icon: '💻',
    },
    {
        year: 2024,
        title: 'MBANK — Lead Frontend',
        description:
            'Переход в MBANK на должность лид фронтенд-разработки. Новая ступень карьеры.',
        icon: '🚀',
    },
    {
        year: 2026,
        title: 'Первые инвестиции в рынок США',
        description:
            '18 марта 2026: сделал первые инвестиции в фондовый рынок США — старт долгосрочного инвестиционного пути.',
        icon: '📈',
    },
];
