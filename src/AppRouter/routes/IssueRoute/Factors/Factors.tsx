import React, { FC, useState } from 'react';
import PureFactors, { Category, Factor, Group, withCancelButton, withCopyButtons, withMountLoad, withSaveButton, withSelfContent } from 'components/Factors';
import { fetchIssueFactors } from 'AppRouter/routes/Factors/fetchIssueFactors';

const Factors = withCopyButtons(withMountLoad(withCancelButton(withSaveButton(withSelfContent(PureFactors)))));

type NormalizedGroup = Omit<Group, 'categories'> & {
    categoryIds: string[];
};

type NormalizedCategory = Omit<Category, 'factors'> & {
    factorIds: string[];
};

const IssueFactors: FC = (props) => {
    const [groupIds, setGroupIds] = useState<string[]>(['0', '1']);
    const [groupMap, setGroupMap] = useState<Record<string, NormalizedGroup>>({
        0: {
            id: '0',
            title: 'First group',
            categoryIds: ['0', '1'],
        },
        1: {
            id: '1',
            title: 'Second group',
            categoryIds: [],
        }
    });

    const [categoryMap, setCategoryMap] = useState<Record<string, NormalizedCategory>>({
        0: {
            id: '0',
            title: '1 category',
            factorIds: ['0', '1', '2'],
        },
        1: {
            id: '1',
            title: '2 category',
            factorIds: ['3', '4', '5'],
        }
    });

    const [factorMap, setFactorsMap] = useState<Record<string, Factor>>({
        0: {
            id: '0',
            name: 'factor 1',
        },
        1: {
            id: '1',
            name: 'factor2',
        },
        2: {
            id: '2',
            name: 'factor3',
        },
        3: {
            id: '3',
            name: 'factor 1',
        },
        4: {
            id: '4',
            name: 'factor2',
        },
        5: {
            id: '5',
            name: 'factor3',
        },
    });

    const groups: Group[] = groupIds.map((groupId) => {
        const normalizedGroup = groupMap[groupId];
        const group: Group = {
            id: normalizedGroup.id,
            title: normalizedGroup.title,
            categories: normalizedGroup.categoryIds.map((categoryId) => {
                const normalizedCategory = categoryMap[categoryId];
                const category: Category = {
                    id: normalizedCategory.id,
                    title: normalizedCategory.title,
                    factors: normalizedCategory.factorIds.map((factorId) => factorMap[factorId]),
                };

                return category;
            }),
        };

        return group;
    });

    const handleMountLoad = () => {
        return fetchIssueFactors({
            accountId: 123,
            issueId: 321,
        });
    };

    return (
        <Factors
            onMountLoad={handleMountLoad}

            canSave
            canCancel
        />
    );
};

export { IssueFactors };
