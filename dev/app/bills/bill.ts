import { Official } from '../official/official'

/**
 * Bill interface object
 */
export interface IBill{
    id: number;
    bill_resolution_type : string;
    bill_type : string;
    bill_status_color : string;
    current_status: string;
    current_status_date: string;
    current_status_description: string;
    current_status_label: string;
    introduced_date: string;
    related_bills: any[];
    sponsor: Official;
    title_without_number: string;
}