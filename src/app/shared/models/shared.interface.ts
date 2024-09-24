export type selectionMode = "single" | "multiple" | "range";
export type btnType = 'solid' | 'light' | 'outline';
export type budgetTitle = "Remaining" | "Income" | "Expenses";
export type dropVariType = "solid" | "stroke";

export interface tableColuType {
    field: string;
    header: string;
}

export interface transTableData {
    id: number;
    date: string;
    category: string;
    payee: string;
    amt: number;
    type: string;
}

export interface dropDownList {
    name: string;
    id: number;
    icon?: string;
}