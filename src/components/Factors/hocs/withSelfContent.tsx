import React, { ComponentType, FC } from 'react';
import { createRender, RenderChain } from 'utils/render/createRender';
import { FactorClickHandler } from '..';
import { CategoryProps } from '../Group/Category/Category.types';
import { FactorProps } from '../Group/Category/Factor/Factor.types';
import { GroupProps } from '../Group/Group.types';
import { Group as IGroup } from '../types';
import Group from '../Group';

interface CanShowContent {
    content?: React.ReactNode;
}

type WCProps = CanShowContent;

type WithSelfContentProps<P extends WCProps> = Omit<P, 'content'> & {
    factorGroups?: IGroup[];
    onFactorClick?: FactorClickHandler;

    innerAppend?: React.ReactNode;

    renderGroup?: RenderChain<GroupProps>;
    renderCategory?: RenderChain<CategoryProps>;
    renderFactor?: RenderChain<FactorProps>;
};

const withSelfContent = <P extends WCProps>(WC: ComponentType<P>): ComponentType<WithSelfContentProps<P>> => {
    const ComponentWithContent: FC<WithSelfContentProps<P>> = props => {
        const { factorGroups, onFactorClick, renderGroup, renderCategory, renderFactor, ...rest } = props;

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
        }, renderGroup);

        const hasGroups = Boolean(Array.isArray(factorGroups) && factorGroups.length);
        let content: React.ReactNode;
        if (hasGroups) {
            content = (
                <>
                    <div className="Factors__groups">
                        {factorGroups.map((group) => (
                            <GroupRender
                                key={group.id}
                                id={group.id}
                                title={group.title}
                                categories={group.categories}
                                className="Factors__group"
                                onFactorClick={onFactorClick}
                                renderCategory={renderCategory}
                                renderFactor={renderFactor}
                            />
                        ))}
                    </div>
                    {props.innerAppend}
                </>
            );
        }

        return (
            <WC {...rest as P} content={content} />
        );
    };

    return ComponentWithContent;
};

export { withSelfContent };
