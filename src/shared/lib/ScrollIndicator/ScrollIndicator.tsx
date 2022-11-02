import React from 'react';
import classes from './styles.less';

/**
 * @prop scroll Значение процента прокрутки таблицы, передаваемое из хука useScrollIndicator.
 */
interface ScrollIndicatorProps {
    scroll: number;
    color?: string;
}

/** Компонент прогресс-бара. */
export const ScrollIndicator = ({ scroll, color }: ScrollIndicatorProps) => {
    const progressBar = (
        <div
            className={classes.progressBar}
            style={{ width: `${scroll}%`, backgroundColor: color }}
        />
    );

    return <div className={classes.progressContainer}>{progressBar}</div>;
};
