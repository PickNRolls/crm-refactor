import React, { ComponentType, FC } from 'react';
import { createRender, RenderChain } from 'utils/render/createRender';

interface CanInnerAppend {
    innerAppend?: React.ReactNode;
}

type WithCancelButtonProps<P extends {}> = P & {
    renderCancelButton?: RenderChain<CancelButtonProps>;
    canCancel?: boolean;
    onCancel?: () => void;
};

interface CancelButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

const withCancelButton = <P extends CanInnerAppend>(WC: ComponentType<P>): ComponentType<WithCancelButtonProps<P>> => {
    const ComponentWithCancel: FC<WithCancelButtonProps<P>> = props => {
        const { canCancel, onCancel, innerAppend } = props;

        const CancelButtonRender = createRender<CancelButtonProps>((renderProps) => (
            <button disabled={renderProps.disabled} onClick={renderProps.onClick}>
                {renderProps.children}
            </button>
        ), props.renderCancelButton);

        const appendContent = (
            <>
                {canCancel && (
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
