import { motion } from 'framer-motion';
import type { GlobalEvent } from '../data/global';
import type { PersonalEvent } from '../data/personal';
import './TimelineEvent.css';

interface Props {
    event: GlobalEvent | PersonalEvent;
    side: 'left' | 'right';
    index: number;
}

function getCategoryColor(event: GlobalEvent | PersonalEvent): string {
    if ('category' in event) {
        const map: Record<string, string> = {
            technology: 'var(--color-independence)',
            economy: 'var(--color-crisis)',
            geopolitics: 'var(--color-revolution)',
            society: 'var(--color-modern)',
        };
        return map[event.category] || 'var(--color-cyan)';
    }
    return 'var(--color-magenta)';
}

function getCategoryLabel(event: GlobalEvent | PersonalEvent): string {
    if ('category' in event) {
        const map: Record<string, string> = {
            technology: 'Технологии',
            economy: 'Экономика',
            geopolitics: 'Геополитика',
            society: 'Общество',
        };
        return map[event.category] || '';
    }
    return 'Личное';
}

function formatEventDate(event: GlobalEvent | PersonalEvent): string {
    const [year, month, day] = event.date.split('-');
    if (!year || !month || !day) return event.date;
    return `${day}.${month}.${year}`;
}

export default function TimelineEventCard({ event, side, index }: Props) {
    const color = getCategoryColor(event);
    const label = getCategoryLabel(event);
    const icon = 'icon' in event ? event.icon : undefined;
    const eventDate = formatEventDate(event);

    return (
        <motion.div
            className={`timeline-event timeline-event--${side}`}
            initial={{ opacity: 0, x: side === 'left' ? -80 : 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ scale: 1.03, y: -4 }}
        >
            <div
                className="timeline-event__card"
                style={{ '--accent': color } as React.CSSProperties}
            >
                <div className="timeline-event__glow" />
                <div className="timeline-event__header">
                    {icon && <span className="timeline-event__icon">{icon}</span>}
                    <span className="timeline-event__date">{eventDate}</span>
                    <span className="timeline-event__badge" style={{ background: color }}>
                        {label}
                    </span>
                </div>
                <h3 className="timeline-event__title">{event.title}</h3>
                <p className="timeline-event__description">{event.description}</p>
                <div
                    className="timeline-event__connector"
                    style={{ background: color }}
                />
            </div>
        </motion.div>
    );
}
