import React, { FC } from 'react';
import Category from './Category';
import { GroupProps } from './Group.types';
import cx from 'classnames';
import './Group.css';
import { createRender } from 'utils/render/createRender';
import { CategoryProps } from './Category/Category.types';

const Group: FC<GroupProps> = props => {
    const { onFactorClick, id } = props;

    const className = cx('Group', props.className);

    const handleFactorClick = (value: { categoryId: string; factorId: string }) => {
        if (!onFactorClick) {
            return;
        }

        onFactorClick({
            groupId: id,
            categoryId: value.categoryId,
            factorId: value.factorId,
        });
    };

    const CategoryRender = createRender<CategoryProps>((renderProps) => (
        <Category
            id={renderProps.id}
            title={renderProps.title}
            factors={renderProps.factors}
            onFactorClick={renderProps.onFactorClick}
            renderFactor={renderProps.renderFactor}
        />
    ), props.renderCategory);

    return (
        <div className={className}>
            <div className="Group__title">
                {props.title}
            </div>
            <div className="Group__categories">
                {props.categories.map((category) => (
                    <CategoryRender
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        factors={category.factors}
                        onFactorClick={handleFactorClick}
                        renderFactor={props.renderFactor}
                    />))}
            </div>
        </div>
    );
};

export { Group };
