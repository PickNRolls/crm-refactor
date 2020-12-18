import React, { ComponentType, FC } from 'react';
import { createRender, RenderChain } from 'utils/render/createRender';
import { Group } from '../types';

interface CanInnerAppend {
    innerAppend?: React.ReactNode;
}

interface NeedsFactorGroups {
    factorGroups?: Group[];
}

type WCProps = CanInnerAppend & NeedsFactorGroups;

type WithCancelButtonProps<P extends {}> = P & {
    renderCancelButton?: RenderChain<CancelButtonProps>;
    canCancel?: boolean;
    onCancel?: () => void;
};

interface CancelButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

const withCancelButton = <P extends WCProps>(WC: ComponentType<P>): ComponentType<WithCancelButtonProps<P>> => {
    const ComponentWithCancel: FC<WithCancelButtonProps<P>> = props => {
        const { factorGroups, canCancel, onCancel, innerAppend } = props;

        const CancelButtonRender = createRender<CancelButtonProps>((renderProps) => (
            <button disabled={renderProps.disabled} onClick={renderProps.onClick}>
                {renderProps.children}
            </button>
        ), props.renderCancelButton);

        const hasFactorGroups = Boolean(Array.isArray(factorGroups) && factorGroups.length);

        const appendContent = (
            <>
                {canCancel && hasFactorGroups && (
                    <CancelButtonRender onClick={onCancel}>
                        cancel
                    </CancelButtonRender>
                )}
                {innerAppend}
            </>
        );

        return <WC {...props} innerAppend={appendContent} />
    };

    return ComponentWithCancel;
};

export { withCancelButton };
