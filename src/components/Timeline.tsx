import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { GlobalEvent } from '../data/global';
import type { PersonalEvent } from '../data/personal';
import TimelineEventCard from './TimelineEvent';
import './Timeline.css';

interface MergedEvent {
    date: string;
    year: number;
    event: GlobalEvent | PersonalEvent;
    side: 'left' | 'right';
}

interface Props {
    globalEvents: GlobalEvent[];
    personalEvents: PersonalEvent[];
}

function getYearFromDate(date: string): number {
    return Number(date.slice(0, 4));
}

export default function Timeline({ globalEvents, personalEvents }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Merge and sort events by date
    const merged: MergedEvent[] = [
        ...globalEvents.map((e) => ({
            date: e.date,
            year: getYearFromDate(e.date),
            event: e,
            side: 'left' as const,
        })),
        ...personalEvents.map((e) => ({
            date: e.date,
            year: getYearFromDate(e.date),
            event: e,
            side: 'right' as const,
        })),
    ].sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        if (a.side === 'left') return -1;
        return 1;
    });

    // Group by year for markers
    const years = [...new Set(merged.map((m) => m.year))];

    return (
        <div className="timeline" ref={containerRef}>
            {/* Animated spine */}
            <div className="timeline__spine">
                <motion.div className="timeline__spine-fill" style={{ height: lineHeight }} />
            </div>

            {/* Interleaved year markers + events */}
            {years.map((year) => {
                const eventsForYear = merged.filter((m) => m.year === year);
                return (
                    <div key={year} className="timeline__year-group">
                        <motion.div
                            className="timeline__year-marker"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="timeline__year-dot" />
                            <span className="timeline__year-label">{year}</span>
                        </motion.div>
                        {eventsForYear.map((item, ei) => (
                            <TimelineEventCard
                                key={`${item.side}-${item.date}-${item.event.title}`}
                                event={item.event}
                                side={item.side}
                                index={ei}
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
