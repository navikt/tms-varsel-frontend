import styles from "@components/VarselView/VarselView.module.css";
import {VarselList} from "@components/VarseList/VarselList.tsx";
import {text} from "@language/text.ts";
import {DOCUMENT_LOCALE} from "@language/language.ts";
import type {Varsel} from "@src/customTypes/Varsel.ts";
import {NoVarselMessage} from "@components/VarselView/NoVarselMessage/NoVarselMessage.tsx";

type Props = {
    oppgaver: Varsel[],
    beskjeder: Varsel[],
}

export const NyeVarslerView = ({oppgaver, beskjeder}: Props) => {
    const hasOppgaver = oppgaver.length > 0
    const hasBeskjeder = beskjeder.length > 0
    if(!hasOppgaver && !hasBeskjeder) {
        return <NoVarselMessage />
    }

    return <div className={styles.container}>
        {oppgaver.length > 0 && <VarselList tittel={text.filterOppgaver[DOCUMENT_LOCALE]} varsler={oppgaver}/>}
        {beskjeder.length > 0 && <VarselList tittel={text.filterBeskjeder[DOCUMENT_LOCALE]} varsler={beskjeder}/>}
    </div>
}