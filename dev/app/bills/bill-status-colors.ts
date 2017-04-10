/**
 * Translates bill statuses to bootstrap labels for color
 */
export class BillStatusColors {
    prov_kill_veto : string = "label-danger";
    fail_second_senate : string = "label-danger";
    passed_bill : string = "label-success";
    passed_constamend : string = "label-success";
    pass_back_senate : string = "label-success";
    vetoed_override_fail_second_house : string = "label-danger";
    fail_originating_house : string = "label-danger";
    fail_second_house : string = "label-danger";
    override_pass_over_house : string = "label-info";
    override_pass_over_senate : string = "label-info";
    pass_back_house : string = "label-default";
    prov_kill_cloturefailed : string = "label-warning";
    enacted_veto_override : string = "label-info";
    passed_concurrentres : string = "label-success";
    prov_kill_suspensionfailed : string = "label-warning";
    passed_simpleres : string = "label-success";
    vetoed_pocket : string = "label-default";
    vetoed_override_fail_originating_house : string = "label-danger";
    conference_passed_senate : string = "label-success";
    fail_originating_senate : string = "label-danger";
    pass_over_senate : string = "label-success";
    prov_kill_pingpongfail : string = "label-warning";
    enacted_signed : string = "label-success";
    pass_over_house : string = "label-success";
    conference_passed_house : string = "label-success";
    reported : string = "label-primary";
    vetoed_override_fail_second_senate : string = "label-danger";
    vetoed_override_fail_originating_senate : string = "label-danger";
    enacted_tendayrule : string = "label-success";
    introduced : string = "label-primary";
    enacted_unknown : string = "";
    referred : string = "label-primary";
}