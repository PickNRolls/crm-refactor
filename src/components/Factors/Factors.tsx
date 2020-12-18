import React, { FC } from 'react';
import Group from './Group';
import { FactorsProps } from './Factors.types';
import './Factors.css';
import { createRender } from 'utils/render/createRender';
import { GroupProps } from './Group/Group.types';

const Factors: FC<FactorsProps> = props => {
    const { factorGroups } = props;

    const GroupRender = createRender<GroupProps>((renderProps) => {
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

    const hasGroups = Boolean(Array.isArray(factorGroups) && factorGroups.length);

    return (
        <div className="Factors">
            {hasGroups ?
                (
                    <div className="Factors__groups">
                        {factorGroups.map((group) => (
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
                    </div>
                ) : (
                    <div className="Factors__noContent"> 
                        No factors
                    </div>
                )
            }
            {props.innerAppend}
        </div>
    );
};

export { Factors };
