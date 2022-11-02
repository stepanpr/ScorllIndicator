import React from 'react';
import {
    ScrollIndicator,
    useScrollIndicator,
} from 'shared/lib/ScrollIndicator';
import styles from './styles.less';

const content = Array.from({ length: 100 }, (_, index) => index + 1);

export const TableComponent = () => {
    const { handleScroll, scroll, tableRef } = useScrollIndicator();
    return (
        <div className={styles.tableWrapper}>
            <div
                ref={tableRef}
                onScroll={handleScroll}
                className={styles.table}
            >
                <div className={styles.tableContent}>
                    {content.map((item) => (
                        <tr>
                            <td>content</td>
                            <td>content</td>
                            <td>content</td>
                            <td>content</td>
                        </tr>
                    ))}
                </div>
            </div>
            <ScrollIndicator scroll={scroll} color="red" />
        </div>
    );
};
