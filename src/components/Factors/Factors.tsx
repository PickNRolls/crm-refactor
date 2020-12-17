import React, { FC } from 'react';
import Group from './Group';
import { FactorsProps, RenderGroup } from './Factors.types';
import './Factors.css';
import { useRenderProp } from 'hooks/useRenderProp';

const Factors: FC<FactorsProps> = props => {
    const GroupRender = useRenderProp<RenderGroup>((renderProps) => {
        return (
            <Group
                id={renderProps.id}
                title={renderProps.title}
                categories={renderProps.categories}
                className={renderProps.className}
                onFactorClick={renderProps.onFactorClick}
                renderCategory={renderProps.renderCategory}
                renderFactor={renderProps.renderFactor}
            />
        );
    }, props.renderGroup);

    return (
        <div className="Factors">
            {props.factorGroups.map((group) => (
                <GroupRender
                    key={group.id}
                    id={group.id}
                    title={group.title}
                    categories={group.categories}
                    className="Factors__group"
                    onFactorClick={props.onFactorClick}
                    renderCategory={props.renderCategory}
                    renderFactor={props.renderFactor}
                />
            ))}
            {props.append}
        </div>
    );
};

export { Factors };
