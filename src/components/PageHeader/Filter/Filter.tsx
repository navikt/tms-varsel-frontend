import {Chips, Search} from "@navikt/ds-react";
import {text} from "@language/text.ts";
import {$filterVarselType, $showTidligere, setFilterSearch} from "@src/store/store.ts";
import {useStore} from '@nanostores/react';
import {DOCUMENT_LOCALE} from "@language/Language.ts";
import styles from "./Filter.module.css";


const toggleOptions = {
    "alle": text.filterAlle[DOCUMENT_LOCALE],
    "oppgave": text.filterOppgaver[DOCUMENT_LOCALE],
    "beskjed": text.filterBeskjeder[DOCUMENT_LOCALE]
} as const

export type ToggleOptions = keyof typeof toggleOptions

export const Filter = ({}) => {
    const isTidligereView: boolean = useStore($showTidligere)
    const filterToggle = useStore($filterVarselType)

    if (!isTidligereView) {
        return null
    }

    return (
        <div className={styles.filterContainer}>
            <Search onChange={(v) => setFilterSearch(v)} className={styles.searchInput} hideLabel={false} label="Søk alle NAV sine sider" variant="simple"/>
            <Chips className={styles.filterToggle}>
                {Object.entries(toggleOptions).map(([key,value]) => (
                    <Chips.Toggle
                        checkmark={false}
                        key={key}
                        selected={filterToggle === key}
                        onClick={() => $filterVarselType.set(key as ToggleOptions)}
                    >
                        {value}
                    </Chips.Toggle>
                ))}
            </Chips>
        </div>

    )
}