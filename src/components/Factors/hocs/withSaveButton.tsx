import React, { ComponentType, FC } from 'react';
import { createRender, RenderChain } from 'utils/render/createRender';

interface CanInnerAppend {
    innerAppend?: React.ReactNode;
}

type WCProps = CanInnerAppend;

type WithSaveButtonProps<P extends {}> = P & {
    renderSaveButton?: RenderChain<SaveButtonProps>;
    canSave?: boolean;
    onSave?: () => void;
};

interface SaveButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

const withSaveButton = <P extends WCProps>(WC: ComponentType<P>): ComponentType<WithSaveButtonProps<P>> => {
    const ComponentWithSave: FC<WithSaveButtonProps<P>> = props => {
        const { canSave, onSave, innerAppend } = props;

        const SaveButtonRender = createRender<SaveButtonProps>((renderProps) => (
            <button disabled={renderProps.disabled} onClick={renderProps.onClick}>
                {renderProps.children}
            </button>
        ), props.renderSaveButton);

        const appendContent = (
            <>
                {canSave && (
                    <SaveButtonRender onClick={onSave}>
                        save
                    </SaveButtonRender>
                )}
                {innerAppend}
            </>
        );

        return <WC {...props} innerAppend={appendContent} />
    };

    return ComponentWithSave;
};

export { withSaveButton };
