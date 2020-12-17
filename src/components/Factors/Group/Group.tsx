import React, { FC, useCallback } from 'react';
import Category from './Category';
import { GroupProps } from './Group.types';
import cx from 'classnames';
import './Group.css';

const Group: FC<GroupProps> = props => {
    const { onFactorClick, id } = props;

    const className = cx('Group', props.className);

    const handleFactorClick = useCallback((value: { categoryId: string; factorId: string }) => {
        if (!onFactorClick) {
            return;
        }

        onFactorClick({
            groupId: id,
            categoryId: value.categoryId,
            factorId: value.factorId,
        });
    }, [onFactorClick, id]);

    return (
        <div className={className}>
            <div className="Group__title">
                {props.title}
            </div>
            <div className="Group__categories">
                {props.categories.map((category) => (
                    <Category
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        factors={category.factors}
                        onFactorClick={handleFactorClick}
                    />
                ))}
            </div>
        </div>
    );
};

export { Group };
