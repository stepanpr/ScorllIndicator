import React from 'react';

/**
 * @description Хук испольуемый совместно с компонентом прогресс-бара ScrollIndicator.
 * @return tableRef Ссылка на таблицу или ее обертку.
 * @return scroll Процент прокрутки таблицы.
 * @return handleScroll Обработчик события onScroll для обертки таблицы.
 */

export const useScrollIndicator = () => {
    const [scroll, setScroll] = React.useState(0);

    const tableRef = React.useRef(null);

    const handleScroll = () => {
        if (!tableRef.current) return;
        const Scrolled = tableRef?.current.scrollTop;
        const MaxHeight =
            tableRef.current.scrollHeight - tableRef.current.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };

    return { handleScroll, scroll, tableRef };
};
