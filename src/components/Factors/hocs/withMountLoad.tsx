import React, { ComponentType, FC, useEffect, useState } from 'react';
import { Group } from '../types';

type WithMountLoadProps<P extends {}> = P & {
    onMountLoad?: () => Promise<Group[]>;
};

interface NeedsFactorGroups {
    factorGroups?: Group[];
}

const withMountLoad = <P extends NeedsFactorGroups>(WC: ComponentType<P>): ComponentType<WithMountLoadProps<P>> => {
    const ComponentWithMountLoad: FC<WithMountLoadProps<P>> = props => {
        const { onMountLoad, ...rest } = props;

        const [groups, setGroups] = useState<Group[]>([]);

        useEffect(() => {
            if (!onMountLoad) {
                return;
            }

            onMountLoad().then((_groups) => {
                setGroups(_groups);
            });
        }, []);

        return <WC {...rest as P} factorGroups={groups} />
    };

    return ComponentWithMountLoad;
};

export { withMountLoad };
