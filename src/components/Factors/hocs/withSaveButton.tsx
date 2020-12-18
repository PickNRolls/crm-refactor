import React, { ComponentType, FC } from 'react';

interface CanInnerAppend {
    innerAppend?: React.ReactNode;
}

type WithSaveButtonProps<P extends {}> = P & {
    canSave?: boolean;
    onSave?: () => void;
};

const withSaveButton = <P extends CanInnerAppend>(WC: ComponentType<P>): ComponentType<WithSaveButtonProps<P>> => {
    const ComponentWithSave: FC<WithSaveButtonProps<P>> = props => {
        const { canSave, onSave, innerAppend } = props;

        const appendContent = (
            <>
                {canSave && <button onClick={onSave}>save</button>}
                {innerAppend}
            </>
        );

        return <WC {...props} innerAppend={appendContent} />
    };

    return ComponentWithSave;
};

export { withSaveButton };
