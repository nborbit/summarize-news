import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Accordion from '../components/Accordion';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Summarize news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          summ.news
        </h1>

        <p className={styles.description}>
          Reddit analytics: main topics, frequency and sentiment for January 2021
        </p>   
        <div className={styles.accordions}>
        <div className={styles.accordionColumn}><p><a target="_blank" href="https://www.reddit.com/r/london/">reddit: r/london/</a></p>
        <Accordion>
        <div label="nhs, 170" sentiment={0.07643853450471101}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqyy25/question_cheapest_private_covid_test_in_london/'>r/london/comments/kqyy25/question_cheapest_private_covid_test_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l65krh/which_covid_vaccine_is_being_offered_at_mitcham/'>r/london/comments/l65krh/which_covid_vaccine_is_being_offered_at_mitcham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqs7v8/anyone_can_recommend_a_cat_vet_please/'>r/london/comments/kqs7v8/anyone_can_recommend_a_cat_vet_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1n04/were_fighting_a_war_london_paramedics_tell_lbc/'>r/london/comments/kr1n04/were_fighting_a_war_london_paramedics_tell_lbc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krr9xe/howwhere_to_volunteer_in_london_right_now/'>r/london/comments/krr9xe/howwhere_to_volunteer_in_london_right_now/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7mczx/what_are_your_daily_observations_290121/'>r/london/comments/l7mczx/what_are_your_daily_observations_290121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l5pt6k/private_psychiatrists/'>r/london/comments/l5pt6k/private_psychiatrists/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv2tgf/excel_to_open_as_citywide_vaccination_centre_this/'>r/london/comments/kv2tgf/excel_to_open_as_citywide_vaccination_centre_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwhzpg/anyone_else_with_symptoms_unable_to_get_an_nhs/'>r/london/comments/kwhzpg/anyone_else_with_symptoms_unable_to_get_an_nhs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuxzxa/what_are_your_daily_observations_110121/'>r/london/comments/kuxzxa/what_are_your_daily_observations_110121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0hq5h/what_are_looking_forward_to_doing_in_the_after/'>r/london/comments/l0hq5h/what_are_looking_forward_to_doing_in_the_after/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktm72d/anyone_else_not_able_to_get_through_to_119/'>r/london/comments/ktm72d/anyone_else_not_able_to_get_through_to_119/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks0mp6/london_will_be_overwhelmed_by_covid_in_a/'>r/london/comments/ks0mp6/london_will_be_overwhelmed_by_covid_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/'>r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xobq/why_are_private_covid_pcr_tests_so_expensive_in/'>r/london/comments/l1xobq/why_are_private_covid_pcr_tests_so_expensive_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l05ixp/when_do_you_think_this_lockdown_would_really_end/'>r/london/comments/l05ixp/when_do_you_think_this_lockdown_would_really_end/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/'>r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt0q83/mayoral_council_tax_to_increase_by_95/'>r/london/comments/kt0q83/mayoral_council_tax_to_increase_by_95/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xwzw/london_buses_turned_into_ambulances_to_ease_covid/'>r/london/comments/l1xwzw/london_buses_turned_into_ambulances_to_ease_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxsfsy/details_of_tfl_fares_package_announced_overall/'>r/london/comments/kxsfsy/details_of_tfl_fares_package_announced_overall/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/'>r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l17ab9/im_an_18yearold_american_moving_to_london_or/'>r/london/comments/l17ab9/im_an_18yearold_american_moving_to_london_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvvpko/private_psychiatrist_recommendations_for/'>r/london/comments/kvvpko/private_psychiatrist_recommendations_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8mbe0/just_some_t3485_in_elephant_and_castle_nothing_to/'>r/london/comments/l8mbe0/just_some_t3485_in_elephant_and_castle_nothing_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr5k1g/should_i_leave_london_and_move_into_my_parents_in/'>r/london/comments/kr5k1g/should_i_leave_london_and_move_into_my_parents_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqanw5/local_post_box_full_with_covid_tests/'>r/london/comments/kqanw5/local_post_box_full_with_covid_tests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ic23zl/covid_pcr_test_for_flights_best_locations/'>r/london/comments/ic23zl/covid_pcr_test_for_flights_best_locations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv44rg/thinking_about_moving_to_london_what_are_your/'>r/london/comments/kv44rg/thinking_about_moving_to_london_what_are_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxw9xr/londons_cheapest_48hr_covid_test_for_traveling/'>r/london/comments/kxw9xr/londons_cheapest_48hr_covid_test_for_traveling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9oa3t/international_space_station_passing_over_london/'>r/london/comments/l9oa3t/international_space_station_passing_over_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1gsm/what_are_your_daily_observations_140121/'>r/london/comments/kx1gsm/what_are_your_daily_observations_140121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/'>r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6zpvj/looking_for_unusual_hobbiesgroups/'>r/london/comments/l6zpvj/looking_for_unusual_hobbiesgroups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt6fh9/do_you_think_it_should_become_mandatory_for/'>r/london/comments/kt6fh9/do_you_think_it_should_become_mandatory_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky1qko/should_i_take_the_vaccine_in_my_home_country_or/'>r/london/comments/ky1qko/should_i_take_the_vaccine_in_my_home_country_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvllu2/what_are_your_daily_observations_120121/'>r/london/comments/kvllu2/what_are_your_daily_observations_120121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kob93d/fittofly_covid_tests_in_london/'>r/london/comments/kob93d/fittofly_covid_tests_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/'>r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7e42/lovely/'>r/london/comments/ky7e42/lovely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krv24a/london_underground_platform_busy_on_first_day_of/'>r/london/comments/krv24a/london_underground_platform_busy_on_first_day_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/'>r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt28lg/nhs_declares_major_incident_throughout_london/'>r/london/comments/kt28lg/nhs_declares_major_incident_throughout_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksjfcd/hospitals_in_london_set_to_run_out_of_beds_in_a/'>r/london/comments/ksjfcd/hospitals_in_london_set_to_run_out_of_beds_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/'>r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2eyyj/salary_concerns_as_an_expat/'>r/london/comments/l2eyyj/salary_concerns_as_an_expat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7hyb/test_results_from_westminster_testing_centre/'>r/london/comments/kv7hyb/test_results_from_westminster_testing_centre/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/'>r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktoi9k/if_lockdown_doesnt_work_why_keep_doing_it/'>r/london/comments/ktoi9k/if_lockdown_doesnt_work_why_keep_doing_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wn5k/sunrise_at_the_end_of_a_long_shift_in_icu/'>r/london/comments/l3wn5k/sunrise_at_the_end_of_a_long_shift_in_icu/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky6v4s/are_there_edgynonconventional/'>r/london/comments/ky6v4s/are_there_edgynonconventional/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0pvr5/getting_a_car_in_london/'>r/london/comments/l0pvr5/getting_a_car_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksdat0/london_will_be_overwhelmed_by_covid_in_a/'>r/london/comments/ksdat0/london_will_be_overwhelmed_by_covid_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/'>r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kse5e3/become_a_vaccine_volunteer/'>r/london/comments/kse5e3/become_a_vaccine_volunteer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/'>r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kza6s8/where_to_take_a_covid_test_for_flying_abroad/'>r/london/comments/kza6s8/where_to_take_a_covid_test_for_flying_abroad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuse4r/festivals_in_2021_in_london/'>r/london/comments/kuse4r/festivals_in_2021_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/'>r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuwqtn/getting_a_job_in_the_nhs_moving_from_california/'>r/london/comments/kuwqtn/getting_a_job_in_the_nhs_moving_from_california/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/'>r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kcvypv/london_is_almost_definitely_going_to_move_into/'>r/london/comments/kcvypv/london_is_almost_definitely_going_to_move_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/'>r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/</a></p>
</div>
<div label="covid, 104" sentiment={-0.016617653180153187}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l27sqd/why_do_idiots_still_next_to_me_on_the_tube/'>r/london/comments/l27sqd/why_do_idiots_still_next_to_me_on_the_tube/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks0mp6/london_will_be_overwhelmed_by_covid_in_a/'>r/london/comments/ks0mp6/london_will_be_overwhelmed_by_covid_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2zmff/big_ben_scaffolding/'>r/london/comments/l2zmff/big_ben_scaffolding/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kudjcv/something_to_think_about_if_you_need_your/'>r/london/comments/kudjcv/something_to_think_about_if_you_need_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/'>r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kympwt/woolwich_foot_tunnel/'>r/london/comments/kympwt/woolwich_foot_tunnel/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/'>r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l32mxm/covid_people_refusing_to_wear_masks_at_waitrose/'>r/london/comments/l32mxm/covid_people_refusing_to_wear_masks_at_waitrose/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp46ax/should_i_leave_my_studio_flat_or_stay/'>r/london/comments/kp46ax/should_i_leave_my_studio_flat_or_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4kort/planning_a_visit_to_london_postcovid_places_to/'>r/london/comments/l4kort/planning_a_visit_to_london_postcovid_places_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/iyg0w1/so_anybody_elses_landlord_decided_to_hike_up_the/'>r/london/comments/iyg0w1/so_anybody_elses_landlord_decided_to_hike_up_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/'>r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksouzb/anyone_live_near_city_airport_whats_the_noise_like/'>r/london/comments/ksouzb/anyone_live_near_city_airport_whats_the_noise_like/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzcvvf/getting_oxygen_cylinders_concentrators/'>r/london/comments/kzcvvf/getting_oxygen_cylinders_concentrators/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/'>r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1ifx/london_covid_city_guide/'>r/london/comments/kx1ifx/london_covid_city_guide/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6o7q5/advise_for_quiet_flat/'>r/london/comments/l6o7q5/advise_for_quiet_flat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kugopz/winter/'>r/london/comments/kugopz/winter/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/'>r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kze1yp/washing_dishes_in_restaurants_in_exchange_for_food/'>r/london/comments/kze1yp/washing_dishes_in_restaurants_in_exchange_for_food/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/knsh3m/buying_in_east_london_areas_and_priorities_matrix/'>r/london/comments/knsh3m/buying_in_east_london_areas_and_priorities_matrix/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt0s6h/currently_stuck_abroad_and_cant_get_back_to_uk/'>r/london/comments/kt0s6h/currently_stuck_abroad_and_cant_get_back_to_uk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktwapg/where_to_live_in_nw6_london/'>r/london/comments/ktwapg/where_to_live_in_nw6_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l81q03/decent_interesting_pizza_in_london/'>r/london/comments/l81q03/decent_interesting_pizza_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvx33e/measuring_the_impact_of_stayathome_lockdown/'>r/london/comments/kvx33e/measuring_the_impact_of_stayathome_lockdown/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuivz5/filming_in_battersea_park/'>r/london/comments/kuivz5/filming_in_battersea_park/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyb3sm/parks_germsbacteria_etc_question/'>r/london/comments/kyb3sm/parks_germsbacteria_etc_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvod9q/estate_agents_are_you_actually_that_busy/'>r/london/comments/kvod9q/estate_agents_are_you_actually_that_busy/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqanw5/local_post_box_full_with_covid_tests/'>r/london/comments/kqanw5/local_post_box_full_with_covid_tests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8bukc/should_i_write_off_moving_to_london_this_year/'>r/london/comments/l8bukc/should_i_write_off_moving_to_london_this_year/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/'>r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/'>r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0sixk/public_chess/'>r/london/comments/l0sixk/public_chess/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2i3r3/what_are_your_daily_observations_220121/'>r/london/comments/l2i3r3/what_are_your_daily_observations_220121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/'>r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/'>r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6zwzv/1300_flat_how_much_can_i_haggle/'>r/london/comments/l6zwzv/1300_flat_how_much_can_i_haggle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l63dm7/never_found_my_place_in_london/'>r/london/comments/l63dm7/never_found_my_place_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktoi9k/if_lockdown_doesnt_work_why_keep_doing_it/'>r/london/comments/ktoi9k/if_lockdown_doesnt_work_why_keep_doing_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uzkr/view_from_the_tate_modern_precovid/'>r/london/comments/l6uzkr/view_from_the_tate_modern_precovid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kve2vj/what_its_like_having_coronavirus_covid19/'>r/london/comments/kve2vj/what_its_like_having_coronavirus_covid19/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/'>r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8pgbp/brixton_2019_on_film/'>r/london/comments/l8pgbp/brixton_2019_on_film/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuxzxa/what_are_your_daily_observations_110121/'>r/london/comments/kuxzxa/what_are_your_daily_observations_110121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/'>r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpa4eg/one_of_the_few_things_you_can_do_this_christmas/'>r/london/comments/kpa4eg/one_of_the_few_things_you_can_do_this_christmas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9e307/i_got_vaccinated_friday_night/'>r/london/comments/l9e307/i_got_vaccinated_friday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv12td/maskwearing_house_cleaner_recommendations_n1/'>r/london/comments/kv12td/maskwearing_house_cleaner_recommendations_n1/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqtbxe/what_are_your_daily_observations_050121/'>r/london/comments/kqtbxe/what_are_your_daily_observations_050121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt6fh9/do_you_think_it_should_become_mandatory_for/'>r/london/comments/kt6fh9/do_you_think_it_should_become_mandatory_for/</a></p>
</div>
<div label="eu, 82" sentiment={0.078899118005172}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kow9xb/best_way_of_returning_home_safely/'>r/london/comments/kow9xb/best_way_of_returning_home_safely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l13wgj/should_i_move_to_london/'>r/london/comments/l13wgj/should_i_move_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz2fif/earlier_today_i_posted_a_photo_of_leicester/'>r/london/comments/kz2fif/earlier_today_i_posted_a_photo_of_leicester/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwe0m1/are_there_any_good_value_for_money_fish_delivery/'>r/london/comments/kwe0m1/are_there_any_good_value_for_money_fish_delivery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8pbrt/rent_increase_after_a_year_common_practice/'>r/london/comments/l8pbrt/rent_increase_after_a_year_common_practice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuiw1l/are_there_negative_attitudes_towards_foreign/'>r/london/comments/kuiw1l/are_there_negative_attitudes_towards_foreign/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/'>r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt0q83/mayoral_council_tax_to_increase_by_95/'>r/london/comments/kt0q83/mayoral_council_tax_to_increase_by_95/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2jej9/where_to_find_marco_polo_jelly_in_london/'>r/london/comments/l2jej9/where_to_find_marco_polo_jelly_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxcn50/im_currently_in_london_but_im_originally_from/'>r/london/comments/kxcn50/im_currently_in_london_but_im_originally_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwryaj/i_wanted_to_know_how_many_calories_there_were_in/'>r/london/comments/kwryaj/i_wanted_to_know_how_many_calories_there_were_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kti8cl/city_of_london_stumbles_through_first_week_of/'>r/london/comments/kti8cl/city_of_london_stumbles_through_first_week_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l90eis/hopes_for_a_eu_student_in_london_after_brexit/'>r/london/comments/l90eis/hopes_for_a_eu_student_in_london_after_brexit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv05wx/chancellor_rishi_sunak_the_city_could_be_set_for/'>r/london/comments/kv05wx/chancellor_rishi_sunak_the_city_could_be_set_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/'>r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9w61/to_londons_dog_owners_is_150_for_postbrexit/'>r/london/comments/kq9w61/to_londons_dog_owners_is_150_for_postbrexit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koqks8/average_salary_for_architect_urban_designer_in/'>r/london/comments/koqks8/average_salary_for_architect_urban_designer_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxey70/estimated_700000_foreignborn_people_have_left/'>r/london/comments/kxey70/estimated_700000_foreignborn_people_have_left/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuse4r/festivals_in_2021_in_london/'>r/london/comments/kuse4r/festivals_in_2021_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksfjc9/the_leader_of_conservatives_on_the_london/'>r/london/comments/ksfjc9/the_leader_of_conservatives_on_the_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3cq17/best_internet_for_gaming/'>r/london/comments/l3cq17/best_internet_for_gaming/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq5dxg/brexit_and_job_market_for_software_engineers/'>r/london/comments/kq5dxg/brexit_and_job_market_for_software_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7xoa/did_the_citys_financial_sector_vote_for_brexit/'>r/london/comments/kv7xoa/did_the_citys_financial_sector_vote_for_brexit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt6fh9/do_you_think_it_should_become_mandatory_for/'>r/london/comments/kt6fh9/do_you_think_it_should_become_mandatory_for/</a></p>
</div>
<div label="wfh, 79" sentiment={0.11712634938900761}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyiinb/what_are_you_most_looking_forward_to_after/'>r/london/comments/kyiinb/what_are_you_most_looking_forward_to_after/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvllu2/what_are_your_daily_observations_120121/'>r/london/comments/kvllu2/what_are_your_daily_observations_120121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kufog3/london_flatshares_wfh_desk_location/'>r/london/comments/kufog3/london_flatshares_wfh_desk_location/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/'>r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8i0aj/weekend_edition_what_are_your_daily_observations/'>r/london/comments/l8i0aj/weekend_edition_what_are_your_daily_observations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko9g8b/2021_rent_negotiationmove_thread/'>r/london/comments/ko9g8b/2021_rent_negotiationmove_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l61jro/private_rents_fall_in_uks_biggest_cities_by_up_to/'>r/london/comments/l61jro/private_rents_fall_in_uks_biggest_cities_by_up_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktfi9h/people_in_london_do_you_consider_moving_out_of/'>r/london/comments/ktfi9h/people_in_london_do_you_consider_moving_out_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv3rzb/for_those_with_insider_information_how_screwed_is/'>r/london/comments/kv3rzb/for_those_with_insider_information_how_screwed_is/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko7wmu/removed_london_bike_lane_blocked_by_parked_cars/'>r/london/comments/ko7wmu/removed_london_bike_lane_blocked_by_parked_cars/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/'>r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2xw73/peoples_experiences_of_looking_for_a_room_in_a/'>r/london/comments/l2xw73/peoples_experiences_of_looking_for_a_room_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr5k1g/should_i_leave_london_and_move_into_my_parents_in/'>r/london/comments/kr5k1g/should_i_leave_london_and_move_into_my_parents_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktskfr/holy_shit_there_are_so_many_people_outside_today/'>r/london/comments/ktskfr/holy_shit_there_are_so_many_people_outside_today/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/'>r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6zwzv/1300_flat_how_much_can_i_haggle/'>r/london/comments/l6zwzv/1300_flat_how_much_can_i_haggle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kufkcz/need_accommodation_in_london_2_nights_each_week/'>r/london/comments/kufkcz/need_accommodation_in_london_2_nights_each_week/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktcq06/freezing_foggy_city_of_london/'>r/london/comments/ktcq06/freezing_foggy_city_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l16s9z/what_are_your_neighbours_like_if_you_live_in/'>r/london/comments/l16s9z/what_are_your_neighbours_like_if_you_live_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7sukg/those_who_have_a_mortgage_how_much_do_you_earn/'>r/london/comments/l7sukg/those_who_have_a_mortgage_how_much_do_you_earn/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuxzxa/what_are_your_daily_observations_110121/'>r/london/comments/kuxzxa/what_are_your_daily_observations_110121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/'>r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/'>r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv12td/maskwearing_house_cleaner_recommendations_n1/'>r/london/comments/kv12td/maskwearing_house_cleaner_recommendations_n1/</a></p>
</div>
<div label="brexit, 69" sentiment={0.04879952910750013}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0jigb/maybe_somebody_can_help_me/'>r/london/comments/l0jigb/maybe_somebody_can_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kow9xb/best_way_of_returning_home_safely/'>r/london/comments/kow9xb/best_way_of_returning_home_safely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l13wgj/should_i_move_to_london/'>r/london/comments/l13wgj/should_i_move_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvllu2/what_are_your_daily_observations_120121/'>r/london/comments/kvllu2/what_are_your_daily_observations_120121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/'>r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks836x/londons_population_is_forecast_to_decline_this/'>r/london/comments/ks836x/londons_population_is_forecast_to_decline_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwcudi/after_a_year_without_live_music_i_decided_to/'>r/london/comments/kwcudi/after_a_year_without_live_music_i_decided_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l15ew6/richmond_dream_house/'>r/london/comments/l15ew6/richmond_dream_house/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko7y5v/fireworks_over_west_south_and_east/'>r/london/comments/ko7y5v/fireworks_over_west_south_and_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kztu72/is_there_any_update_on_curbing_the_amount_of/'>r/london/comments/kztu72/is_there_any_update_on_curbing_the_amount_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/'>r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/jkcjak/brian_rose_for_mayor/'>r/london/comments/jkcjak/brian_rose_for_mayor/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/'>r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l5fjnj/when_hard_brexit_is_a_punchline_to_sell_erectile/'>r/london/comments/l5fjnj/when_hard_brexit_is_a_punchline_to_sell_erectile/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko8yh6/what_are_your_most_successful_friends_doing_now/'>r/london/comments/ko8yh6/what_are_your_most_successful_friends_doing_now/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kti8cl/city_of_london_stumbles_through_first_week_of/'>r/london/comments/kti8cl/city_of_london_stumbles_through_first_week_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/'>r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr3d98/calling_londoners_for_rbritishleftists/'>r/london/comments/kr3d98/calling_londoners_for_rbritishleftists/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1tt22/what_are_your_daily_observations_210121/'>r/london/comments/l1tt22/what_are_your_daily_observations_210121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8bukc/should_i_write_off_moving_to_london_this_year/'>r/london/comments/l8bukc/should_i_write_off_moving_to_london_this_year/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7xoa/did_the_citys_financial_sector_vote_for_brexit/'>r/london/comments/kv7xoa/did_the_citys_financial_sector_vote_for_brexit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l20uws/how_did_this_happen/'>r/london/comments/l20uws/how_did_this_happen/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv44rg/thinking_about_moving_to_london_what_are_your/'>r/london/comments/kv44rg/thinking_about_moving_to_london_what_are_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8qgvx/need_a_protagonist_for_my_documentary/'>r/london/comments/l8qgvx/need_a_protagonist_for_my_documentary/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/'>r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksfjc9/the_leader_of_conservatives_on_the_london/'>r/london/comments/ksfjc9/the_leader_of_conservatives_on_the_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7v77l/does_on_here_know_of_any_gotos_for_when_a_bike/'>r/london/comments/l7v77l/does_on_here_know_of_any_gotos_for_when_a_bike/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq5dxg/brexit_and_job_market_for_software_engineers/'>r/london/comments/kq5dxg/brexit_and_job_market_for_software_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqtbxe/what_are_your_daily_observations_050121/'>r/london/comments/kqtbxe/what_are_your_daily_observations_050121/</a></p>
</div>
<div label="covent garden, 54" sentiment={0.04903201993479772}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp60xp/londoners_whats_the_most_beautiful_street_in_your/'>r/london/comments/kp60xp/londoners_whats_the_most_beautiful_street_in_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l81q03/decent_interesting_pizza_in_london/'>r/london/comments/l81q03/decent_interesting_pizza_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3f7hr/tips_for_someone_who_is_moving_to_london/'>r/london/comments/l3f7hr/tips_for_someone_who_is_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyiinb/what_are_you_most_looking_forward_to_after/'>r/london/comments/kyiinb/what_are_you_most_looking_forward_to_after/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/'>r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2jej9/where_to_find_marco_polo_jelly_in_london/'>r/london/comments/l2jej9/where_to_find_marco_polo_jelly_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/'>r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzzyha/floral_street_covent_garden_still_with_christmas/'>r/london/comments/kzzyha/floral_street_covent_garden_still_with_christmas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9ipp7/short_video_of_a_rare_moment_snowflakes_falling/'>r/london/comments/l9ipp7/short_video_of_a_rare_moment_snowflakes_falling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/'>r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
</div>
<div label="reddit, 53" sentiment={0.08167558332652673}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/'>r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kver5g/food_bank_volunteering_advice/'>r/london/comments/kver5g/food_bank_volunteering_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kow9xb/best_way_of_returning_home_safely/'>r/london/comments/kow9xb/best_way_of_returning_home_safely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l07q9u/afternoon_tea/'>r/london/comments/l07q9u/afternoon_tea/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kucghw/salary_packages_for_a_marketingadvertising_and_pr/'>r/london/comments/kucghw/salary_packages_for_a_marketingadvertising_and_pr/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/'>r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7e42/lovely/'>r/london/comments/ky7e42/lovely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gdsn/easiest_way_to_clean_shower_glass_to_get_it/'>r/london/comments/l0gdsn/easiest_way_to_clean_shower_glass_to_get_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzsu88/portobello_market_during_lockdown_sunday_17012021/'>r/london/comments/kzsu88/portobello_market_during_lockdown_sunday_17012021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpjwat/opinions_on_new_college_of_the_humanities/'>r/london/comments/kpjwat/opinions_on_new_college_of_the_humanities/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0kwog/updated_football_map_of_london/'>r/london/comments/l0kwog/updated_football_map_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/'>r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kryw9l/chances_of_getting_a_council_flat_in_camden/'>r/london/comments/kryw9l/chances_of_getting_a_council_flat_in_camden/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1tt22/what_are_your_daily_observations_210121/'>r/london/comments/l1tt22/what_are_your_daily_observations_210121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxpsx7/what_are_your_daily_observations_150121/'>r/london/comments/kxpsx7/what_are_your_daily_observations_150121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l58cuc/ive_lived_in_london_my_entire_life_but_todays_the/'>r/london/comments/l58cuc/ive_lived_in_london_my_entire_life_but_todays_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/'>r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xh6/found_a_fox_head_in_garden/'>r/london/comments/kq4xh6/found_a_fox_head_in_garden/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpiydn/dear_london_dog_owners_please_pick_up_after_your/'>r/london/comments/kpiydn/dear_london_dog_owners_please_pick_up_after_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq2dxq/recommendations_for_cbd_oil/'>r/london/comments/kq2dxq/recommendations_for_cbd_oil/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2yxhs/1922_king_sobhuza_ii_of_swaziland_southern_africa/'>r/london/comments/l2yxhs/1922_king_sobhuza_ii_of_swaziland_southern_africa/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/'>r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq6byz/how_would_you_describe_hampstead_heaths_character/'>r/london/comments/kq6byz/how_would_you_describe_hampstead_heaths_character/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/'>r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3sae1/london_parakeets_dont_give_a_flying_fuck_i_caught/'>r/london/comments/l3sae1/london_parakeets_dont_give_a_flying_fuck_i_caught/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2kpdx/clapham_common_sunrise/'>r/london/comments/l2kpdx/clapham_common_sunrise/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq5dxg/brexit_and_job_market_for_software_engineers/'>r/london/comments/kq5dxg/brexit_and_job_market_for_software_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzv117/to_those_working_from_home_how_do_you_spend_your/'>r/london/comments/kzv117/to_those_working_from_home_how_do_you_spend_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/'>r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpa4eg/one_of_the_few_things_you_can_do_this_christmas/'>r/london/comments/kpa4eg/one_of_the_few_things_you_can_do_this_christmas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7n542/fist_post_on_reddit_icy_lockdown_run_anyone_guess/'>r/london/comments/l7n542/fist_post_on_reddit_icy_lockdown_run_anyone_guess/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/'>r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/</a></p>
</div>
<div label="london bridge, 51" sentiment={0.04536269558328382}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvwfhb/whats_the_road_next_to_borough_market_called/'>r/london/comments/kvwfhb/whats_the_road_next_to_borough_market_called/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvtfsq/tower_bridge_1931/'>r/london/comments/kvtfsq/tower_bridge_1931/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9vjq/essential_london_uk_trivia/'>r/london/comments/kq9vjq/essential_london_uk_trivia/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3odz4/what_is_bermondsey_really_like/'>r/london/comments/l3odz4/what_is_bermondsey_really_like/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l19d8r/shard_in_the_dark_knight_mood/'>r/london/comments/l19d8r/shard_in_the_dark_knight_mood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpssl/the_perks_of_an_early_morning_commute/'>r/london/comments/ktpssl/the_perks_of_an_early_morning_commute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/'>r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt9v59/deptford_flash_whats_going_on/'>r/london/comments/kt9v59/deptford_flash_whats_going_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3jxf/advice_i_live_in_zone_2_and_travel_to_catford/'>r/london/comments/kq3jxf/advice_i_live_in_zone_2_and_travel_to_catford/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/'>r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktskfr/holy_shit_there_are_so_many_people_outside_today/'>r/london/comments/ktskfr/holy_shit_there_are_so_many_people_outside_today/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/'>r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/'>r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7wtfx/anyone_know_whats_happening_by_london_bridge_bus/'>r/london/comments/l7wtfx/anyone_know_whats_happening_by_london_bridge_bus/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/'>r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/'>r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr5k7z/whats_it_like_living_in_the_docklands/'>r/london/comments/kr5k7z/whats_it_like_living_in_the_docklands/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/'>r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzz9oz/eerie_charlotte_place_with_no_restaurant_lights/'>r/london/comments/kzz9oz/eerie_charlotte_place_with_no_restaurant_lights/</a></p>
</div>
<div label="boris, 51" sentiment={0.010656512605042013}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxus03/escooter_gifts_should_be_returned_to_shops_met/'>r/london/comments/kxus03/escooter_gifts_should_be_returned_to_shops_met/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/'>r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/jkcjak/brian_rose_for_mayor/'>r/london/comments/jkcjak/brian_rose_for_mayor/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqgyk7/national_lockdown_20_good_luck_everyone_and_stay/'>r/london/comments/kqgyk7/national_lockdown_20_good_luck_everyone_and_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l05ixp/when_do_you_think_this_lockdown_would_really_end/'>r/london/comments/l05ixp/when_do_you_think_this_lockdown_would_really_end/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx5qdj/alexei_sayles_lockdown_bike_ride_3_hampstead_heath/'>r/london/comments/kx5qdj/alexei_sayles_lockdown_bike_ride_3_hampstead_heath/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/'>r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi1dk/cases_in_london_are_16x_that_in_new_york_city_am/'>r/london/comments/kqi1dk/cases_in_london_are_16x_that_in_new_york_city_am/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqjhr0/and_just_like_that_social_life_no_more/'>r/london/comments/kqjhr0/and_just_like_that_social_life_no_more/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/'>r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr5k1g/should_i_leave_london_and_move_into_my_parents_in/'>r/london/comments/kr5k1g/should_i_leave_london_and_move_into_my_parents_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l18705/fuck_boris_small_johnson/'>r/london/comments/l18705/fuck_boris_small_johnson/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7xoa/did_the_citys_financial_sector_vote_for_brexit/'>r/london/comments/kv7xoa/did_the_citys_financial_sector_vote_for_brexit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l20uws/how_did_this_happen/'>r/london/comments/l20uws/how_did_this_happen/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuse4r/festivals_in_2021_in_london/'>r/london/comments/kuse4r/festivals_in_2021_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx2sbt/tower_of_londons_queen_raven_missing_and_feared/'>r/london/comments/kx2sbt/tower_of_londons_queen_raven_missing_and_feared/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/'>r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzv117/to_those_working_from_home_how_do_you_spend_your/'>r/london/comments/kzv117/to_those_working_from_home_how_do_you_spend_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/'>r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqtbxe/what_are_your_daily_observations_050121/'>r/london/comments/kqtbxe/what_are_your_daily_observations_050121/</a></p>
</div>
<div label="amazon, 49" sentiment={0.038314927702682806}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksi6vj/have_your_houses_ever_been_burgled_whats_your/'>r/london/comments/ksi6vj/have_your_houses_ever_been_burgled_whats_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq0tfn/man_builds_free_amazon_for_buying_local_plugin/'>r/london/comments/kq0tfn/man_builds_free_amazon_for_buying_local_plugin/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxgemt/dalston_walking_sticks/'>r/london/comments/kxgemt/dalston_walking_sticks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq1e1v/man_builds_free_amazon_for_buying_local_plugin/'>r/london/comments/kq1e1v/man_builds_free_amazon_for_buying_local_plugin/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyb4c5/are_there_any_art_shops_still_open/'>r/london/comments/kyb4c5/are_there_any_art_shops_still_open/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt1c66/where_can_i_buy_a_skeleton_prop_in_london_during/'>r/london/comments/kt1c66/where_can_i_buy_a_skeleton_prop_in_london_during/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krn0zy/lockdown_things_to_do_help_advice/'>r/london/comments/krn0zy/lockdown_things_to_do_help_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp46ax/should_i_leave_my_studio_flat_or_stay/'>r/london/comments/kp46ax/should_i_leave_my_studio_flat_or_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7e42/lovely/'>r/london/comments/ky7e42/lovely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvs04j/do_the_london_speed_cameras_not_work/'>r/london/comments/kvs04j/do_the_london_speed_cameras_not_work/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv3kru/makes_a_change_from_them_being_lobbed_in_the/'>r/london/comments/kv3kru/makes_a_change_from_them_being_lobbed_in_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kodhj2/anyone_know_if_any_pharmacy_is_open_in_the_east/'>r/london/comments/kodhj2/anyone_know_if_any_pharmacy_is_open_in_the_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1oe4d/london_cam/'>r/london/comments/l1oe4d/london_cam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq14qb/man_builds_free_amazon_for_buying_local_plugin/'>r/london/comments/kq14qb/man_builds_free_amazon_for_buying_local_plugin/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7mczx/what_are_your_daily_observations_290121/'>r/london/comments/l7mczx/what_are_your_daily_observations_290121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqkzoh/if_you_want_to_reduce_your_dependence_on_amazon/'>r/london/comments/kqkzoh/if_you_want_to_reduce_your_dependence_on_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1tt22/what_are_your_daily_observations_210121/'>r/london/comments/l1tt22/what_are_your_daily_observations_210121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/'>r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqanw5/local_post_box_full_with_covid_tests/'>r/london/comments/kqanw5/local_post_box_full_with_covid_tests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpgg7h/any_online_toy_stores_where_i_can_order_a_huge/'>r/london/comments/kpgg7h/any_online_toy_stores_where_i_can_order_a_huge/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9v0o/where_can_i_go_buy_a_nintendo_switch/'>r/london/comments/kq9v0o/where_can_i_go_buy_a_nintendo_switch/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksazkd/to_all_delivery_drivers_i_appreciate_you_and_am/'>r/london/comments/ksazkd/to_all_delivery_drivers_i_appreciate_you_and_am/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/'>r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/'>r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
</div>
<div label="tfl, 44" sentiment={0.07089234881280336}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6tnnm/got_500_fine_for_riding_an_escooter/'>r/london/comments/l6tnnm/got_500_fine_for_riding_an_escooter/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxv79k/is_there_a_tube_map_with_realistic_travel_times/'>r/london/comments/kxv79k/is_there_a_tube_map_with_realistic_travel_times/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/'>r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky2cbd/bus_info/'>r/london/comments/ky2cbd/bus_info/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9vjq/essential_london_uk_trivia/'>r/london/comments/kq9vjq/essential_london_uk_trivia/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwt3jq/sometimes_tfl_can_be_quite_aesthetic_acrylic/'>r/london/comments/kwt3jq/sometimes_tfl_can_be_quite_aesthetic_acrylic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/jkcjak/brian_rose_for_mayor/'>r/london/comments/jkcjak/brian_rose_for_mayor/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l04d5y/yougov_what_counts_as_london_according_to/'>r/london/comments/l04d5y/yougov_what_counts_as_london_according_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktqtys/londoners_take_your_pick_yellow_or_white_for/'>r/london/comments/ktqtys/londoners_take_your_pick_yellow_or_white_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt0q83/mayoral_council_tax_to_increase_by_95/'>r/london/comments/kt0q83/mayoral_council_tax_to_increase_by_95/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7hfa/woolwich_crossrail_station_elizabeth_line_zone/'>r/london/comments/kv7hfa/woolwich_crossrail_station_elizabeth_line_zone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxyz5r/canary_wharf_could_move_into_zone_1_under_new_tfl/'>r/london/comments/kxyz5r/canary_wharf_could_move_into_zone_1_under_new_tfl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp2j2y/official_tfl_licensed_tube_face_coverings_here/'>r/london/comments/kp2j2y/official_tfl_licensed_tube_face_coverings_here/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxsdd9/details_of_tfl_fares_package_announced_all_fares/'>r/london/comments/kxsdd9/details_of_tfl_fares_package_announced_all_fares/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksc6h1/so_fked_off_with_buses/'>r/london/comments/ksc6h1/so_fked_off_with_buses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktwapg/where_to_live_in_nw6_london/'>r/london/comments/ktwapg/where_to_live_in_nw6_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3jxf/advice_i_live_in_zone_2_and_travel_to_catford/'>r/london/comments/kq3jxf/advice_i_live_in_zone_2_and_travel_to_catford/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l76zkv/catched_for_ticket_in_metro_problem/'>r/london/comments/l76zkv/catched_for_ticket_in_metro_problem/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwpn2s/tory_london_mayoral_candidate_homeless_can_save/'>r/london/comments/kwpn2s/tory_london_mayoral_candidate_homeless_can_save/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7syj5/nothing_stresses_me_out_more_than_thinking_i_have/'>r/london/comments/l7syj5/nothing_stresses_me_out_more_than_thinking_i_have/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/'>r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksbn0d/can_we_do_this_in_london/'>r/london/comments/ksbn0d/can_we_do_this_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzve49/help_my_mum_lost_her_things_on_the_way_to_work/'>r/london/comments/kzve49/help_my_mum_lost_her_things_on_the_way_to_work/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxsfsy/details_of_tfl_fares_package_announced_overall/'>r/london/comments/kxsfsy/details_of_tfl_fares_package_announced_overall/</a></p>
</div>
<div label="tesco, 38" sentiment={0.07646303258145365}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ku14hn/best_shops_for_social_distancing/'>r/london/comments/ku14hn/best_shops_for_social_distancing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxvbfu/woman_called_fking_jew_after_asking_waitrose/'>r/london/comments/kxvbfu/woman_called_fking_jew_after_asking_waitrose/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l78a3i/old_school_east_end_pubs/'>r/london/comments/l78a3i/old_school_east_end_pubs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvllu2/what_are_your_daily_observations_120121/'>r/london/comments/kvllu2/what_are_your_daily_observations_120121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krn0zy/lockdown_things_to_do_help_advice/'>r/london/comments/krn0zy/lockdown_things_to_do_help_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktosqv/where_can_i_get_an_affordable_bottle_of_burgundy/'>r/london/comments/ktosqv/where_can_i_get_an_affordable_bottle_of_burgundy/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l98ww4/weekend_edition_what_are_your_daily_observations/'>r/london/comments/l98ww4/weekend_edition_what_are_your_daily_observations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7e42/lovely/'>r/london/comments/ky7e42/lovely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwe0m1/are_there_any_good_value_for_money_fish_delivery/'>r/london/comments/kwe0m1/are_there_any_good_value_for_money_fish_delivery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7593w/where_can_i_buy_tarragon_herbspice/'>r/london/comments/l7593w/where_can_i_buy_tarragon_herbspice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1tt22/what_are_your_daily_observations_210121/'>r/london/comments/l1tt22/what_are_your_daily_observations_210121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8bukc/should_i_write_off_moving_to_london_this_year/'>r/london/comments/l8bukc/should_i_write_off_moving_to_london_this_year/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszleg/what_imagery_do_londoners_associate_with_london/'>r/london/comments/kszleg/what_imagery_do_londoners_associate_with_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/'>r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplxit/food_for_collection_for_food_bank/'>r/london/comments/kplxit/food_for_collection_for_food_bank/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0fccd/what_are_your_daily_observations_190121/'>r/london/comments/l0fccd/what_are_your_daily_observations_190121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9f9xd/cost_of_living/'>r/london/comments/l9f9xd/cost_of_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/'>r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/</a></p>
</div>
<div label="barbican, 37" sentiment={0.14295951795951797}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx60hb/the_beautiful_barbican_in_summer_2019/'>r/london/comments/kx60hb/the_beautiful_barbican_in_summer_2019/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktcjyy/sketching_in_museums/'>r/london/comments/ktcjyy/sketching_in_museums/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxmenm/londons_hidden_indoor_jungle_at_the_barbican/'>r/london/comments/kxmenm/londons_hidden_indoor_jungle_at_the_barbican/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l07atu/london_streetwear_photography_locations/'>r/london/comments/l07atu/london_streetwear_photography_locations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2kld1/taken_at_the_barbican_around_october_2020/'>r/london/comments/l2kld1/taken_at_the_barbican_around_october_2020/</a></p>
</div>
<div label="youtube, 37" sentiment={0.12931218556218557}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kw4ofc/london_youtuber_apologises_and_deletes_video/'>r/london/comments/kw4ofc/london_youtuber_apologises_and_deletes_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky6v4s/are_there_edgynonconventional/'>r/london/comments/ky6v4s/are_there_edgynonconventional/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq6ubs/vibrations_from_silvertown_tunnel_project/'>r/london/comments/kq6ubs/vibrations_from_silvertown_tunnel_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krn0zy/lockdown_things_to_do_help_advice/'>r/london/comments/krn0zy/lockdown_things_to_do_help_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l02bd2/ronan_point_the_22storey_tower_block_in_canning/'>r/london/comments/l02bd2/ronan_point_the_22storey_tower_block_in_canning/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9vjq/essential_london_uk_trivia/'>r/london/comments/kq9vjq/essential_london_uk_trivia/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/'>r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8loux/the_story_of_the_battersea_poltergeist/'>r/london/comments/l8loux/the_story_of_the_battersea_poltergeist/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6qw7d/what_are_your_daily_observations_280121/'>r/london/comments/l6qw7d/what_are_your_daily_observations_280121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8ipxo/is_farmdrop_any_good/'>r/london/comments/l8ipxo/is_farmdrop_any_good/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8udex/londons_little_italy_the_legends_of_islington/'>r/london/comments/l8udex/londons_little_italy_the_legends_of_islington/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1mixc/southall_an_area_with_potential/'>r/london/comments/l1mixc/southall_an_area_with_potential/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0sixk/public_chess/'>r/london/comments/l0sixk/public_chess/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1pkpt/youtube_link/'>r/london/comments/l1pkpt/youtube_link/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx59n4/found_in_a_dead_end_courtyard_in_faringdon_any/'>r/london/comments/kx59n4/found_in_a_dead_end_courtyard_in_faringdon_any/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/'>r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3a13g/lockdown_london_weekends/'>r/london/comments/l3a13g/lockdown_london_weekends/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1gsm/what_are_your_daily_observations_140121/'>r/london/comments/kx1gsm/what_are_your_daily_observations_140121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzv117/to_those_working_from_home_how_do_you_spend_your/'>r/london/comments/kzv117/to_those_working_from_home_how_do_you_spend_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxcjkq/the_crobar_soho_has_finally_decided_to_give_us/'>r/london/comments/kxcjkq/the_crobar_soho_has_finally_decided_to_give_us/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2onaj/22nd_jan_at_1320_glad_were_all_in_this_together/'>r/london/comments/l2onaj/22nd_jan_at_1320_glad_were_all_in_this_together/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/'>r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koupvr/why_are_the_comments_on_the_fireworks_video_so/'>r/london/comments/koupvr/why_are_the_comments_on_the_fireworks_video_so/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksqm3e/missing_london/'>r/london/comments/ksqm3e/missing_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6zpvj/looking_for_unusual_hobbiesgroups/'>r/london/comments/l6zpvj/looking_for_unusual_hobbiesgroups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2ddv7/stepney_and_shoreditch/'>r/london/comments/l2ddv7/stepney_and_shoreditch/</a></p>
</div>
<div label="heathrow, 37" sentiment={0.13048701298701298}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqyy25/question_cheapest_private_covid_test_in_london/'>r/london/comments/kqyy25/question_cheapest_private_covid_test_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kow9xb/best_way_of_returning_home_safely/'>r/london/comments/kow9xb/best_way_of_returning_home_safely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv041e/flying_out_of_heathrow_in_t4/'>r/london/comments/kv041e/flying_out_of_heathrow_in_t4/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/'>r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyg2cs/snowing/'>r/london/comments/kyg2cs/snowing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kso3mh/how_is_west_drayton/'>r/london/comments/kso3mh/how_is_west_drayton/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xobq/why_are_private_covid_pcr_tests_so_expensive_in/'>r/london/comments/l1xobq/why_are_private_covid_pcr_tests_so_expensive_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt6ovo/about_the_elizabeth_line/'>r/london/comments/kt6ovo/about_the_elizabeth_line/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kw0y7k/following_on_from_the_sonic_boom_we_heard_today_i/'>r/london/comments/kw0y7k/following_on_from_the_sonic_boom_we_heard_today_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kmkn2k/heathrow_12hr_layover/'>r/london/comments/kmkn2k/heathrow_12hr_layover/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/knsh3m/buying_in_east_london_areas_and_priorities_matrix/'>r/london/comments/knsh3m/buying_in_east_london_areas_and_priorities_matrix/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqfcoa/any_recs_for_fight_to_fly_testing_in_london/'>r/london/comments/kqfcoa/any_recs_for_fight_to_fly_testing_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/'>r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8b63e/the_view_from_my_balcony_for_2_days_of_this_past/'>r/london/comments/l8b63e/the_view_from_my_balcony_for_2_days_of_this_past/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxw9xr/londons_cheapest_48hr_covid_test_for_traveling/'>r/london/comments/kxw9xr/londons_cheapest_48hr_covid_test_for_traveling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3f7hr/tips_for_someone_who_is_moving_to_london/'>r/london/comments/l3f7hr/tips_for_someone_who_is_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kza6s8/where_to_take_a_covid_test_for_flying_abroad/'>r/london/comments/kza6s8/where_to_take_a_covid_test_for_flying_abroad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/klms7u/did_you_know_there_are_red_london_buses_that/'>r/london/comments/klms7u/did_you_know_there_are_red_london_buses_that/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kykh5x/fulham_and_airplane_noise/'>r/london/comments/kykh5x/fulham_and_airplane_noise/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1mixc/southall_an_area_with_potential/'>r/london/comments/l1mixc/southall_an_area_with_potential/</a></p>
</div>
<div label="canary wharf, 36" sentiment={0.10446997612176182}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6fpj0/a_quiet_afternoon_in_greenwich_park/'>r/london/comments/l6fpj0/a_quiet_afternoon_in_greenwich_park/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kled6w/megathread_for_visitors_and_new_existing/'>r/london/comments/kled6w/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvmuec/social_distancing_at_canary_wharf/'>r/london/comments/kvmuec/social_distancing_at_canary_wharf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto2fp/from_a_cycle_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto2fp/from_a_cycle_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyg2cs/snowing/'>r/london/comments/kyg2cs/snowing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kslfib/a_conservatives_gla_candidate_whos_jubilant_that/'>r/london/comments/kslfib/a_conservatives_gla_candidate_whos_jubilant_that/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3odz4/what_is_bermondsey_really_like/'>r/london/comments/l3odz4/what_is_bermondsey_really_like/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp1npa/im_starting_a_new_job_on_monday_ill_be_taking/'>r/london/comments/kp1npa/im_starting_a_new_job_on_monday_ill_be_taking/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0g8nq/top_of_greenwich_park_on_a_very_foggy_morning/'>r/london/comments/l0g8nq/top_of_greenwich_park_on_a_very_foggy_morning/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv4zui/what_would_you_change_about_london/'>r/london/comments/kv4zui/what_would_you_change_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyjb8p/city_living/'>r/london/comments/kyjb8p/city_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxyz5r/canary_wharf_could_move_into_zone_1_under_new_tfl/'>r/london/comments/kxyz5r/canary_wharf_could_move_into_zone_1_under_new_tfl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kugopz/winter/'>r/london/comments/kugopz/winter/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0d8kv/the_city_1970/'>r/london/comments/l0d8kv/the_city_1970/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto2yq/from_a_cycle_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto2yq/from_a_cycle_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ku3tm3/moving_to_isle_of_dogs_march_2021/'>r/london/comments/ku3tm3/moving_to_isle_of_dogs_march_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0iugl/does_anywhere_know_where_this_is_its_in_london_i/'>r/london/comments/l0iugl/does_anywhere_know_where_this_is_its_in_london_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/'>r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqanw5/local_post_box_full_with_covid_tests/'>r/london/comments/kqanw5/local_post_box_full_with_covid_tests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/'>r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/'>r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto3t0/cycled_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto3t0/cycled_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv8eoj/moving_to_canary_wharf/'>r/london/comments/kv8eoj/moving_to_canary_wharf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3o90x/thames_beach_in_canada_water_looking_over_to/'>r/london/comments/l3o90x/thames_beach_in_canada_water_looking_over_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz72y4/how_crowded_does_greenwich_foot_tunnel_get_during/'>r/london/comments/kz72y4/how_crowded_does_greenwich_foot_tunnel_get_during/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqtbxe/what_are_your_daily_observations_050121/'>r/london/comments/kqtbxe/what_are_your_daily_observations_050121/</a></p>
</div>
<div label="sainsbury, 36" sentiment={0.09257560726310726}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/'>r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwe0m1/are_there_any_good_value_for_money_fish_delivery/'>r/london/comments/kwe0m1/are_there_any_good_value_for_money_fish_delivery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/'>r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzsu88/portobello_market_during_lockdown_sunday_17012021/'>r/london/comments/kzsu88/portobello_market_during_lockdown_sunday_17012021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0kwog/updated_football_map_of_london/'>r/london/comments/l0kwog/updated_football_map_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krsmji/south_wimbledon_around_colliers_wood_surbiton/'>r/london/comments/krsmji/south_wimbledon_around_colliers_wood_surbiton/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktyekw/is_25000_salary_enough_to_sustain_living_expenses/'>r/london/comments/ktyekw/is_25000_salary_enough_to_sustain_living_expenses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/'>r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kppdgi/public_toilets/'>r/london/comments/kppdgi/public_toilets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplxit/food_for_collection_for_food_bank/'>r/london/comments/kplxit/food_for_collection_for_food_bank/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwblm3/what_are_your_daily_observations_130121/'>r/london/comments/kwblm3/what_are_your_daily_observations_130121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr5k7z/whats_it_like_living_in_the_docklands/'>r/london/comments/kr5k7z/whats_it_like_living_in_the_docklands/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kytqw6/north_finchley_a_sweet_black_homeless_man_who/'>r/london/comments/kytqw6/north_finchley_a_sweet_black_homeless_man_who/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqcbjc/stuff_you_can_still_do_in_london_during_the/'>r/london/comments/kqcbjc/stuff_you_can_still_do_in_london_during_the/</a></p>
</div>
<div label="bbc, 35" sentiment={0.09376978973407546}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxus03/escooter_gifts_should_be_returned_to_shops_met/'>r/london/comments/kxus03/escooter_gifts_should_be_returned_to_shops_met/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvllu2/what_are_your_daily_observations_120121/'>r/london/comments/kvllu2/what_are_your_daily_observations_120121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/'>r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krn0zy/lockdown_things_to_do_help_advice/'>r/london/comments/krn0zy/lockdown_things_to_do_help_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l86rvi/how_many_different_english_accents_do_londoners/'>r/london/comments/l86rvi/how_many_different_english_accents_do_londoners/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwowui/im_crying_right_now_i_never_thought_that_news_of/'>r/london/comments/kwowui/im_crying_right_now_i_never_thought_that_news_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1fer/bbc_news_nye_countdown_segment_were_they_live/'>r/london/comments/ko1fer/bbc_news_nye_countdown_segment_were_they_live/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/'>r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1vft9/londons_design_museum_has_revealed_the_winner_of/'>r/london/comments/l1vft9/londons_design_museum_has_revealed_the_winner_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1v5s/o2_fireworks_and_drones_show_not_knowing_it_would/'>r/london/comments/ko1v5s/o2_fireworks_and_drones_show_not_knowing_it_would/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1kjm/final_plot_twist_of_2020_happy_new_year_london/'>r/london/comments/ko1kjm/final_plot_twist_of_2020_happy_new_year_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/'>r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7gxc2/hi_confused_canadian_here_why_is_london_slang_so/'>r/london/comments/l7gxc2/hi_confused_canadian_here_why_is_london_slang_so/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3v1tk/morning_over_stratford_waiting_for_snow_later/'>r/london/comments/l3v1tk/morning_over_stratford_waiting_for_snow_later/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6e0ns/brian_rose_did_a_livestream_from_his_bus_this/'>r/london/comments/l6e0ns/brian_rose_did_a_livestream_from_his_bus_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksqm3e/missing_london/'>r/london/comments/ksqm3e/missing_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/'>r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xoyu/is_there_any_arse_this_man_wont_kiss_now_its_joe/'>r/london/comments/l1xoyu/is_there_any_arse_this_man_wont_kiss_now_its_joe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2ddv7/stepney_and_shoreditch/'>r/london/comments/l2ddv7/stepney_and_shoreditch/</a></p>
</div>
<div label="oxford street, 32" sentiment={0.08324731316137567}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqyy25/question_cheapest_private_covid_test_in_london/'>r/london/comments/kqyy25/question_cheapest_private_covid_test_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp36r0/regent_street_hyperlapse/'>r/london/comments/kp36r0/regent_street_hyperlapse/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krotb8/is_it_possible_to_rent_in_london_making_minimum/'>r/london/comments/krotb8/is_it_possible_to_rent_in_london_making_minimum/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/'>r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/'>r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqfcoa/any_recs_for_fight_to_fly_testing_in_london/'>r/london/comments/kqfcoa/any_recs_for_fight_to_fly_testing_in_london/</a></p>
</div>
<div label="waitrose, 31" sentiment={0.12175499231950847}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ku14hn/best_shops_for_social_distancing/'>r/london/comments/ku14hn/best_shops_for_social_distancing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxvbfu/woman_called_fking_jew_after_asking_waitrose/'>r/london/comments/kxvbfu/woman_called_fking_jew_after_asking_waitrose/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kphqik/good_nyc_deli_sandwich_or_some_quality_cured/'>r/london/comments/kphqik/good_nyc_deli_sandwich_or_some_quality_cured/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l32mxm/covid_people_refusing_to_wear_masks_at_waitrose/'>r/london/comments/l32mxm/covid_people_refusing_to_wear_masks_at_waitrose/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktosqv/where_can_i_get_an_affordable_bottle_of_burgundy/'>r/london/comments/ktosqv/where_can_i_get_an_affordable_bottle_of_burgundy/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/'>r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krfmsy/baklava_at_liverpool_street/'>r/london/comments/krfmsy/baklava_at_liverpool_street/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8ipxo/is_farmdrop_any_good/'>r/london/comments/l8ipxo/is_farmdrop_any_good/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krsmji/south_wimbledon_around_colliers_wood_surbiton/'>r/london/comments/krsmji/south_wimbledon_around_colliers_wood_surbiton/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l692nd/worth_moving_to_london/'>r/london/comments/l692nd/worth_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7593w/where_can_i_buy_tarragon_herbspice/'>r/london/comments/l7593w/where_can_i_buy_tarragon_herbspice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kppdgi/public_toilets/'>r/london/comments/kppdgi/public_toilets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqanw5/local_post_box_full_with_covid_tests/'>r/london/comments/kqanw5/local_post_box_full_with_covid_tests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/'>r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq6byz/how_would_you_describe_hampstead_heaths_character/'>r/london/comments/kq6byz/how_would_you_describe_hampstead_heaths_character/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
</div>
<div label="icu, 31" sentiment={0.09872503840245776}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/'>r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksjfcd/hospitals_in_london_set_to_run_out_of_beds_in_a/'>r/london/comments/ksjfcd/hospitals_in_london_set_to_run_out_of_beds_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l85u43/nobody_cares_bears_old_street/'>r/london/comments/l85u43/nobody_cares_bears_old_street/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/'>r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wn9r/sunrise_at_the_end_of_a_long_shift_in_icu/'>r/london/comments/l3wn9r/sunrise_at_the_end_of_a_long_shift_in_icu/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksdat0/london_will_be_overwhelmed_by_covid_in_a/'>r/london/comments/ksdat0/london_will_be_overwhelmed_by_covid_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wn5k/sunrise_at_the_end_of_a_long_shift_in_icu/'>r/london/comments/l3wn5k/sunrise_at_the_end_of_a_long_shift_in_icu/</a></p>
</div>
<div label="facebook, 29" sentiment={0.07917459695476937}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/'>r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l07q9u/afternoon_tea/'>r/london/comments/l07q9u/afternoon_tea/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt1iyp/tutoring/'>r/london/comments/kt1iyp/tutoring/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3xhk3/why_didnt_this_man_escape_from_this_nerdy_guys/'>r/london/comments/l3xhk3/why_didnt_this_man_escape_from_this_nerdy_guys/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/k6iyvr/lost_my_engagement_ring_last_night_somewhere/'>r/london/comments/k6iyvr/lost_my_engagement_ring_last_night_somewhere/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt3z9u/dropped_my_phone_in_the_canal/'>r/london/comments/kt3z9u/dropped_my_phone_in_the_canal/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wjzt/what_area_to_look_for_creative_livework_space_for/'>r/london/comments/l3wjzt/what_area_to_look_for_creative_livework_space_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2xw73/peoples_experiences_of_looking_for_a_room_in_a/'>r/london/comments/l2xw73/peoples_experiences_of_looking_for_a_room_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/'>r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/'>r/london/comments/kpr208/beautiful_light_installation_in_canary_wharf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxciwe/the_crobar_soho_jukebox_is_back_just_saw_on/'>r/london/comments/kxciwe/the_crobar_soho_jukebox_is_back_just_saw_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/'>r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx2r1q/any_charity_shops_accepting_furniture_donations/'>r/london/comments/kx2r1q/any_charity_shops_accepting_furniture_donations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuxzxa/what_are_your_daily_observations_110121/'>r/london/comments/kuxzxa/what_are_your_daily_observations_110121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koa3ee/a_welllooked_after_dog_has_showed_up_outside_my/'>r/london/comments/koa3ee/a_welllooked_after_dog_has_showed_up_outside_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kmd5h6/is_it_worth_staying_in_london_for_postcovid/'>r/london/comments/kmd5h6/is_it_worth_staying_in_london_for_postcovid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz803f/my_mum_took_this_photo_leicester_square_maybe/'>r/london/comments/kz803f/my_mum_took_this_photo_leicester_square_maybe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqfcoa/any_recs_for_fight_to_fly_testing_in_london/'>r/london/comments/kqfcoa/any_recs_for_fight_to_fly_testing_in_london/</a></p>
</div>
<div label="instagram, 29" sentiment={0.06398902821316615}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/'>r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l07q9u/afternoon_tea/'>r/london/comments/l07q9u/afternoon_tea/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/'>r/london/comments/ko8x7a/what_are_your_new_years_day_observations_010121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyobhe/hi_im_looking_for_an_indoor_space_to_propose_to/'>r/london/comments/kyobhe/hi_im_looking_for_an_indoor_space_to_propose_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l17ab9/im_an_18yearold_american_moving_to_london_or/'>r/london/comments/l17ab9/im_an_18yearold_american_moving_to_london_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxzgfu/instagram_star_purposely_drives_into_big_puddle/'>r/london/comments/kxzgfu/instagram_star_purposely_drives_into_big_puddle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/'>r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxciwe/the_crobar_soho_jukebox_is_back_just_saw_on/'>r/london/comments/kxciwe/the_crobar_soho_jukebox_is_back_just_saw_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/'>r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2z9sr/100_years_ago_today_22_january_1921_the_first/'>r/london/comments/l2z9sr/100_years_ago_today_22_january_1921_the_first/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyoczd/hi_im_looking_for_an_indoor_space_in_london_to/'>r/london/comments/kyoczd/hi_im_looking_for_an_indoor_space_in_london_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/'>r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8pgbp/brixton_2019_on_film/'>r/london/comments/l8pgbp/brixton_2019_on_film/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3sae1/london_parakeets_dont_give_a_flying_fuck_i_caught/'>r/london/comments/l3sae1/london_parakeets_dont_give_a_flying_fuck_i_caught/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3o90x/thames_beach_in_canada_water_looking_over_to/'>r/london/comments/l3o90x/thames_beach_in_canada_water_looking_over_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2onaj/22nd_jan_at_1320_glad_were_all_in_this_together/'>r/london/comments/l2onaj/22nd_jan_at_1320_glad_were_all_in_this_together/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/'>r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l85vvp/summer_in_west_london/'>r/london/comments/l85vvp/summer_in_west_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/'>r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6zpvj/looking_for_unusual_hobbiesgroups/'>r/london/comments/l6zpvj/looking_for_unusual_hobbiesgroups/</a></p>
</div>
<div label="bethnal green, 27" sentiment={0.03403345625567848}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ku3spn/weird_question_whats_your_favourite_line_mine_has/'>r/london/comments/ku3spn/weird_question_whats_your_favourite_line_mine_has/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/'>r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqjbsu/i_drew_my_old_window_view_from_bethnal_green/'>r/london/comments/kqjbsu/i_drew_my_old_window_view_from_bethnal_green/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqzvv2/old_view_from_bethnal_green/'>r/london/comments/kqzvv2/old_view_from_bethnal_green/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l78a3i/old_school_east_end_pubs/'>r/london/comments/l78a3i/old_school_east_end_pubs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqzx7n/saw_the_post_with_a_drawing_of_the_view_from/'>r/london/comments/kqzx7n/saw_the_post_with_a_drawing_of_the_view_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp5i0r/is_1200_budget_for_a_flat_for_a_family_of_4/'>r/london/comments/kp5i0r/is_1200_budget_for_a_flat_for_a_family_of_4/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/'>r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/'>r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/</a></p>
</div>
<div label="peckham, 26" sentiment={0.10528719891219893}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2y8eg/moving_to_london_location_suggestions_please/'>r/london/comments/l2y8eg/moving_to_london_location_suggestions_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwbyaj/spotted_in_peckham/'>r/london/comments/kwbyaj/spotted_in_peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7nzo6/funky_coloured_house_in_peckham/'>r/london/comments/l7nzo6/funky_coloured_house_in_peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/'>r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/'>r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4atom/megathread_for_visitors_and_new_existing/'>r/london/comments/l4atom/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/'>r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7dq4n/buying_property_in_london/'>r/london/comments/l7dq4n/buying_property_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kol4xo/peckham/'>r/london/comments/kol4xo/peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4o36i/is_there_a_post_office_anywhere_in_se_london_that/'>r/london/comments/l4o36i/is_there_a_post_office_anywhere_in_se_london_that/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krnk71/is_the_clapham_junction_area_nice/'>r/london/comments/krnk71/is_the_clapham_junction_area_nice/</a></p>
</div>
<div label="tower bridge, 24" sentiment={0.09776597823472825}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzyph8/here_are_some_more_interesting_pictures_of_how/'>r/london/comments/kzyph8/here_are_some_more_interesting_pictures_of_how/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp60xp/londoners_whats_the_most_beautiful_street_in_your/'>r/london/comments/kp60xp/londoners_whats_the_most_beautiful_street_in_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/'>r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7xl65/a_recent_snap_of_tower_bridge_i_took/'>r/london/comments/l7xl65/a_recent_snap_of_tower_bridge_i_took/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9flat/price_check_request_1br_flat_within_5_minutes_of/'>r/london/comments/l9flat/price_check_request_1br_flat_within_5_minutes_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvtfsq/tower_bridge_1931/'>r/london/comments/kvtfsq/tower_bridge_1931/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2nxpb/how_much_do_you_spend_on_utility_bills_and/'>r/london/comments/l2nxpb/how_much_do_you_spend_on_utility_bills_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpssl/the_perks_of_an_early_morning_commute/'>r/london/comments/ktpssl/the_perks_of_an_early_morning_commute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzxboq/best_places_to_run_in_london/'>r/london/comments/kzxboq/best_places_to_run_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/'>r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6srpf/good_walks_for_taking_photos/'>r/london/comments/l6srpf/good_walks_for_taking_photos/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/'>r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv4zui/what_would_you_change_about_london/'>r/london/comments/kv4zui/what_would_you_change_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz72y4/how_crowded_does_greenwich_foot_tunnel_get_during/'>r/london/comments/kz72y4/how_crowded_does_greenwich_foot_tunnel_get_during/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwj0y8/tower_bridge_drawing/'>r/london/comments/kwj0y8/tower_bridge_drawing/</a></p>
</div>
<div label="crossrail, 24" sentiment={0.06528724747474747}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt6ovo/about_the_elizabeth_line/'>r/london/comments/kt6ovo/about_the_elizabeth_line/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/'>r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv2s7j/how_is_abbey_wood/'>r/london/comments/kv2s7j/how_is_abbey_wood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/'>r/london/comments/kto604/cycled_round_canary_wharf_a_few_weeks_ago/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kubb8q/whats_ealing_like/'>r/london/comments/kubb8q/whats_ealing_like/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/'>r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7hfa/woolwich_crossrail_station_elizabeth_line_zone/'>r/london/comments/kv7hfa/woolwich_crossrail_station_elizabeth_line_zone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/'>r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1mixc/southall_an_area_with_potential/'>r/london/comments/l1mixc/southall_an_area_with_potential/</a></p>
</div>
<div label="khan, 24" sentiment={0.1350189581830207}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxzja4/will_the_mayor_of_london_election_still_go_ahead/'>r/london/comments/kxzja4/will_the_mayor_of_london_election_still_go_ahead/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/jkcjak/brian_rose_for_mayor/'>r/london/comments/jkcjak/brian_rose_for_mayor/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwpn2s/tory_london_mayoral_candidate_homeless_can_save/'>r/london/comments/kwpn2s/tory_london_mayoral_candidate_homeless_can_save/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/'>r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/'>r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/'>r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/</a></p>
</div>
<div label="hackney, 23" sentiment={0.07048251667816886}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/'>r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/'>r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kw20gu/shock_as_jewish_homes_in_london_vandalized_with/'>r/london/comments/kw20gu/shock_as_jewish_homes_in_london_vandalized_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l78a3i/old_school_east_end_pubs/'>r/london/comments/l78a3i/old_school_east_end_pubs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/'>r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9ga1t/could_someone_explain_what_is_good_about/'>r/london/comments/l9ga1t/could_someone_explain_what_is_good_about/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyia01/car_cloned_in_hackney_lets_play_spot_the/'>r/london/comments/kyia01/car_cloned_in_hackney_lets_play_spot_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqby3a/passed_these_little_gems_a_few_weeks_back_whilst/'>r/london/comments/kqby3a/passed_these_little_gems_a_few_weeks_back_whilst/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/'>r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktyekw/is_25000_salary_enough_to_sustain_living_expenses/'>r/london/comments/ktyekw/is_25000_salary_enough_to_sustain_living_expenses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv4zui/what_would_you_change_about_london/'>r/london/comments/kv4zui/what_would_you_change_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wjzt/what_area_to_look_for_creative_livework_space_for/'>r/london/comments/l3wjzt/what_area_to_look_for_creative_livework_space_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l58cuc/ive_lived_in_london_my_entire_life_but_todays_the/'>r/london/comments/l58cuc/ive_lived_in_london_my_entire_life_but_todays_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3ca14/book_exchange_in_east_london/'>r/london/comments/l3ca14/book_exchange_in_east_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9c4mo/boy_16_knifed_and_has_acid_thrown_in_his_face_in/'>r/london/comments/l9c4mo/boy_16_knifed_and_has_acid_thrown_in_his_face_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krotb8/is_it_possible_to_rent_in_london_making_minimum/'>r/london/comments/krotb8/is_it_possible_to_rent_in_london_making_minimum/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzz9oz/eerie_charlotte_place_with_no_restaurant_lights/'>r/london/comments/kzz9oz/eerie_charlotte_place_with_no_restaurant_lights/</a></p>
</div>
<div label="i’m, 22" sentiment={0.19693062348906504}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l78a3i/old_school_east_end_pubs/'>r/london/comments/l78a3i/old_school_east_end_pubs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyg2cs/snowing/'>r/london/comments/kyg2cs/snowing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3x8sd/i_know_a_bunch_of_these_are_coming_but_as_an/'>r/london/comments/l3x8sd/i_know_a_bunch_of_these_are_coming_but_as_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0ou42/vice_i_run_the_call_centre_for_a_highly/'>r/london/comments/l0ou42/vice_i_run_the_call_centre_for_a_highly/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksskjl/whats_it_like_working_at_subway/'>r/london/comments/ksskjl/whats_it_like_working_at_subway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6qw7d/what_are_your_daily_observations_280121/'>r/london/comments/l6qw7d/what_are_your_daily_observations_280121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpl454/gymbox_users_please_help/'>r/london/comments/kpl454/gymbox_users_please_help/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt0s6h/currently_stuck_abroad_and_cant_get_back_to_uk/'>r/london/comments/kt0s6h/currently_stuck_abroad_and_cant_get_back_to_uk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/'>r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqcu3u/i_will_be_shooting_a_video_that_requires_a_lot_of/'>r/london/comments/kqcu3u/i_will_be_shooting_a_video_that_requires_a_lot_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwryaj/i_wanted_to_know_how_many_calories_there_were_in/'>r/london/comments/kwryaj/i_wanted_to_know_how_many_calories_there_were_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/'>r/london/comments/kuc4v0/what_i_think_is_going_wrong_in_london_regarding/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwblm3/what_are_your_daily_observations_130121/'>r/london/comments/kwblm3/what_are_your_daily_observations_130121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqtbxe/what_are_your_daily_observations_050121/'>r/london/comments/kqtbxe/what_are_your_daily_observations_050121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l13wgj/should_i_move_to_london/'>r/london/comments/l13wgj/should_i_move_to_london/</a></p>
</div>
<div label="’d, 22" sentiment={0.12693722943722946}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/'>r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7bfc0/how_close_to_richmond_can_one_rent_before_it/'>r/london/comments/l7bfc0/how_close_to_richmond_can_one_rent_before_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ku30uv/i_loved_camden/'>r/london/comments/ku30uv/i_loved_camden/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kucghw/salary_packages_for_a_marketingadvertising_and_pr/'>r/london/comments/kucghw/salary_packages_for_a_marketingadvertising_and_pr/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kympwt/woolwich_foot_tunnel/'>r/london/comments/kympwt/woolwich_foot_tunnel/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/'>r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/'>r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzcvvf/getting_oxygen_cylinders_concentrators/'>r/london/comments/kzcvvf/getting_oxygen_cylinders_concentrators/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/'>r/london/comments/kov9ex/why_do_some_people_want_london_schools_to_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kse5e3/become_a_vaccine_volunteer/'>r/london/comments/kse5e3/become_a_vaccine_volunteer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0sklk/art_from_httpstwittercomhamboggy_titled_streets/'>r/london/comments/l0sklk/art_from_httpstwittercomhamboggy_titled_streets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwryaj/i_wanted_to_know_how_many_calories_there_were_in/'>r/london/comments/kwryaj/i_wanted_to_know_how_many_calories_there_were_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2eyyj/salary_concerns_as_an_expat/'>r/london/comments/l2eyyj/salary_concerns_as_an_expat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kkkiyz/i_love_this_photo_of_whitechapel_that_i_took/'>r/london/comments/kkkiyz/i_love_this_photo_of_whitechapel_that_i_took/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzamff/neighbour_neglecting_their_cat/'>r/london/comments/kzamff/neighbour_neglecting_their_cat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9v0o/where_can_i_go_buy_a_nintendo_switch/'>r/london/comments/kq9v0o/where_can_i_go_buy_a_nintendo_switch/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kww4r4/negotiating_sale_price_in_london_is_1215_drop_a/'>r/london/comments/kww4r4/negotiating_sale_price_in_london_is_1215_drop_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/'>r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/</a></p>
</div>
<div label="kings cross, 21" sentiment={0.14587439016010445}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvs04j/do_the_london_speed_cameras_not_work/'>r/london/comments/kvs04j/do_the_london_speed_cameras_not_work/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksdtoa/best_area_to_live_in_around_king_x/'>r/london/comments/ksdtoa/best_area_to_live_in_around_king_x/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/'>r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4atom/megathread_for_visitors_and_new_existing/'>r/london/comments/l4atom/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6srpf/good_walks_for_taking_photos/'>r/london/comments/l6srpf/good_walks_for_taking_photos/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l692nd/worth_moving_to_london/'>r/london/comments/l692nd/worth_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3cpwv/can_anyone_identify_this_alley_my_initial_thought/'>r/london/comments/l3cpwv/can_anyone_identify_this_alley_my_initial_thought/</a></p>
</div>
<div label="tube, 19" sentiment={0.07273225677830941}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koh3me/glass_masks_10foot_social_distancing_colloidal/'>r/london/comments/koh3me/glass_masks_10foot_social_distancing_colloidal/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kow9xb/best_way_of_returning_home_safely/'>r/london/comments/kow9xb/best_way_of_returning_home_safely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktxbhi/went_for_a_run_through_city_today_never_thought/'>r/london/comments/ktxbhi/went_for_a_run_through_city_today_never_thought/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwdiey/ladbroke_grove/'>r/london/comments/kwdiey/ladbroke_grove/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx59n4/found_in_a_dead_end_courtyard_in_faringdon_any/'>r/london/comments/kx59n4/found_in_a_dead_end_courtyard_in_faringdon_any/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv0ler/foggy_night_on_saturday_willesden_green/'>r/london/comments/kv0ler/foggy_night_on_saturday_willesden_green/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1y3fy/london_in_the_autumn_is_hard_to_beat/'>r/london/comments/l1y3fy/london_in_the_autumn_is_hard_to_beat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp1npa/im_starting_a_new_job_on_monday_ill_be_taking/'>r/london/comments/kp1npa/im_starting_a_new_job_on_monday_ill_be_taking/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktyjzd/hi_can_anyone_tell_me_how_i_go_about_getting_from/'>r/london/comments/ktyjzd/hi_can_anyone_tell_me_how_i_go_about_getting_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l610cu/someones_lost_the_most_apt_mug_ever/'>r/london/comments/l610cu/someones_lost_the_most_apt_mug_ever/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7hfa/woolwich_crossrail_station_elizabeth_line_zone/'>r/london/comments/kv7hfa/woolwich_crossrail_station_elizabeth_line_zone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7dq4n/buying_property_in_london/'>r/london/comments/l7dq4n/buying_property_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp2j2y/official_tfl_licensed_tube_face_coverings_here/'>r/london/comments/kp2j2y/official_tfl_licensed_tube_face_coverings_here/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/'>r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/'>r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/</a></p>
</div>
<div label="trump, 19" sentiment={-0.0474906015037594}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxzja4/will_the_mayor_of_london_election_still_go_ahead/'>r/london/comments/kxzja4/will_the_mayor_of_london_election_still_go_ahead/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktd5ku/planning_a_vacationhoneymoon/'>r/london/comments/ktd5ku/planning_a_vacationhoneymoon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kw4ofc/london_youtuber_apologises_and_deletes_video/'>r/london/comments/kw4ofc/london_youtuber_apologises_and_deletes_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l018ju/trump_baby_blimp_enters_museum_of_london/'>r/london/comments/l018ju/trump_baby_blimp_enters_museum_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwpn2s/tory_london_mayoral_candidate_homeless_can_save/'>r/london/comments/kwpn2s/tory_london_mayoral_candidate_homeless_can_save/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l37euc/a_street_of_london/'>r/london/comments/l37euc/a_street_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/'>r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/'>r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1vft9/londons_design_museum_has_revealed_the_winner_of/'>r/london/comments/l1vft9/londons_design_museum_has_revealed_the_winner_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/'>r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/</a></p>
</div>
<div label="m25, 19" sentiment={0.06917862838915469}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/'>r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp0l31/what_makes_one_a_londoner/'>r/london/comments/kp0l31/what_makes_one_a_londoner/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0pvr5/getting_a_car_in_london/'>r/london/comments/l0pvr5/getting_a_car_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l04d5y/yougov_what_counts_as_london_according_to/'>r/london/comments/l04d5y/yougov_what_counts_as_london_according_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kw1qw1/best_town_to_live_near_london_through_fall_2021/'>r/london/comments/kw1qw1/best_town_to_live_near_london_through_fall_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l62kxf/new_underground_labyrinth_of_tunnels_dug_in/'>r/london/comments/l62kxf/new_underground_labyrinth_of_tunnels_dug_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9f9xd/cost_of_living/'>r/london/comments/l9f9xd/cost_of_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l692nd/worth_moving_to_london/'>r/london/comments/l692nd/worth_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/'>r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/'>r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/</a></p>
</div>
<div label="spareroom, 18" sentiment={0.21513447971781305}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/'>r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt0s6h/currently_stuck_abroad_and_cant_get_back_to_uk/'>r/london/comments/kt0s6h/currently_stuck_abroad_and_cant_get_back_to_uk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2xw73/peoples_experiences_of_looking_for_a_room_in_a/'>r/london/comments/l2xw73/peoples_experiences_of_looking_for_a_room_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr0hcm/joint_tenancy_or_separate_tenancies/'>r/london/comments/kr0hcm/joint_tenancy_or_separate_tenancies/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuxzxa/what_are_your_daily_observations_110121/'>r/london/comments/kuxzxa/what_are_your_daily_observations_110121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39af5/help_needed_on_rent_negotiations/'>r/london/comments/l39af5/help_needed_on_rent_negotiations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks836x/londons_population_is_forecast_to_decline_this/'>r/london/comments/ks836x/londons_population_is_forecast_to_decline_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpje57/help_me_run_salary_numbers_for_move_across_the/'>r/london/comments/kpje57/help_me_run_salary_numbers_for_move_across_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kmd5h6/is_it_worth_staying_in_london_for_postcovid/'>r/london/comments/kmd5h6/is_it_worth_staying_in_london_for_postcovid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l690ff/tips_for_apartment_finding_for_students_in_a/'>r/london/comments/l690ff/tips_for_apartment_finding_for_students_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kufkcz/need_accommodation_in_london_2_nights_each_week/'>r/london/comments/kufkcz/need_accommodation_in_london_2_nights_each_week/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
</div>
<div label="clapham, 18" sentiment={0.30789296737213406}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvcgq0/solo_basketball_in_the_local_park_during_lockdown/'>r/london/comments/kvcgq0/solo_basketball_in_the_local_park_during_lockdown/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4kb4d/clapham_was_magical_in_the_snow_yesterday/'>r/london/comments/l4kb4d/clapham_was_magical_in_the_snow_yesterday/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/'>r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kru2tf/one_in_one_out_rule_for_small_cafes_applies_to/'>r/london/comments/kru2tf/one_in_one_out_rule_for_small_cafes_applies_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9q5c/there_is_a_full_size_avocado_tree_somewhere_in/'>r/london/comments/kv9q5c/there_is_a_full_size_avocado_tree_somewhere_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krnk71/is_the_clapham_junction_area_nice/'>r/london/comments/krnk71/is_the_clapham_junction_area_nice/</a></p>
</div>
<div label="nye, 18" sentiment={0.08098845598845598}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqcbjc/stuff_you_can_still_do_in_london_during_the/'>r/london/comments/kqcbjc/stuff_you_can_still_do_in_london_during_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1n04/were_fighting_a_war_london_paramedics_tell_lbc/'>r/london/comments/kr1n04/were_fighting_a_war_london_paramedics_tell_lbc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko19z7/happy_new_year_everyone/'>r/london/comments/ko19z7/happy_new_year_everyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1fer/bbc_news_nye_countdown_segment_were_they_live/'>r/london/comments/ko1fer/bbc_news_nye_countdown_segment_were_they_live/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/'>r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqanw5/local_post_box_full_with_covid_tests/'>r/london/comments/kqanw5/local_post_box_full_with_covid_tests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/'>r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l98ww4/weekend_edition_what_are_your_daily_observations/'>r/london/comments/l98ww4/weekend_edition_what_are_your_daily_observations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/'>r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kn6ei2/coronavirus_tier_4_remains_in_effect_nhs_is_busy/'>r/london/comments/kn6ei2/coronavirus_tier_4_remains_in_effect_nhs_is_busy/</a></p>
</div>
<div label="gp, 18" sentiment={0.04504654681738015}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv2tgf/excel_to_open_as_citywide_vaccination_centre_this/'>r/london/comments/kv2tgf/excel_to_open_as_citywide_vaccination_centre_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwign8/im_16_and_may_have_to_leave_home_soon_any_ideas/'>r/london/comments/kwign8/im_16_and_may_have_to_leave_home_soon_any_ideas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky1qko/should_i_take_the_vaccine_in_my_home_country_or/'>r/london/comments/ky1qko/should_i_take_the_vaccine_in_my_home_country_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuse4r/festivals_in_2021_in_london/'>r/london/comments/kuse4r/festivals_in_2021_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktoi9k/if_lockdown_doesnt_work_why_keep_doing_it/'>r/london/comments/ktoi9k/if_lockdown_doesnt_work_why_keep_doing_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/'>r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7mczx/what_are_your_daily_observations_290121/'>r/london/comments/l7mczx/what_are_your_daily_observations_290121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvvpko/private_psychiatrist_recommendations_for/'>r/london/comments/kvvpko/private_psychiatrist_recommendations_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/'>r/london/comments/kuq7js/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq6ubs/vibrations_from_silvertown_tunnel_project/'>r/london/comments/kq6ubs/vibrations_from_silvertown_tunnel_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqtbxe/what_are_your_daily_observations_050121/'>r/london/comments/kqtbxe/what_are_your_daily_observations_050121/</a></p>
</div>
<div label="hmrc, 18" sentiment={0.04056382275132275}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9vjq/essential_london_uk_trivia/'>r/london/comments/kq9vjq/essential_london_uk_trivia/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kow9xb/best_way_of_returning_home_safely/'>r/london/comments/kow9xb/best_way_of_returning_home_safely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kucghw/salary_packages_for_a_marketingadvertising_and_pr/'>r/london/comments/kucghw/salary_packages_for_a_marketingadvertising_and_pr/</a></p>
</div>
<div label="liverpool street, 17" sentiment={0.046784228843052375}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/knsh3m/buying_in_east_london_areas_and_priorities_matrix/'>r/london/comments/knsh3m/buying_in_east_london_areas_and_priorities_matrix/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7e42/lovely/'>r/london/comments/ky7e42/lovely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/'>r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krfmsy/baklava_at_liverpool_street/'>r/london/comments/krfmsy/baklava_at_liverpool_street/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1vir/sorry_guys/'>r/london/comments/ko1vir/sorry_guys/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktvtwh/train_stations_with_pubs_in_london/'>r/london/comments/ktvtwh/train_stations_with_pubs_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/'>r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/'>r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9ga1t/could_someone_explain_what_is_good_about/'>r/london/comments/l9ga1t/could_someone_explain_what_is_good_about/</a></p>
</div>
<div label="battersea, 17" sentiment={0.09653594771241829}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/'>r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l861lf/where_is_best_to_live_in_south_west_london/'>r/london/comments/l861lf/where_is_best_to_live_in_south_west_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuivew/londoner_looking_to_rehome_a_dog_in_west_london/'>r/london/comments/kuivew/londoner_looking_to_rehome_a_dog_in_west_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/klv7xz/selling_flats/'>r/london/comments/klv7xz/selling_flats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksp5ua/people_who_live_alone_in_london_which_area_do_you/'>r/london/comments/ksp5ua/people_who_live_alone_in_london_which_area_do_you/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/'>r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpgc7y/battersea_041220/'>r/london/comments/kpgc7y/battersea_041220/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/'>r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krnk71/is_the_clapham_junction_area_nice/'>r/london/comments/krnk71/is_the_clapham_junction_area_nice/</a></p>
</div>
<div label="chelsea, 16" sentiment={0.11783301767676767}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko7wmu/removed_london_bike_lane_blocked_by_parked_cars/'>r/london/comments/ko7wmu/removed_london_bike_lane_blocked_by_parked_cars/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7nzo6/funky_coloured_house_in_peckham/'>r/london/comments/l7nzo6/funky_coloured_house_in_peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7gxc2/hi_confused_canadian_here_why_is_london_slang_so/'>r/london/comments/l7gxc2/hi_confused_canadian_here_why_is_london_slang_so/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krotb8/is_it_possible_to_rent_in_london_making_minimum/'>r/london/comments/krotb8/is_it_possible_to_rent_in_london_making_minimum/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksp5ua/people_who_live_alone_in_london_which_area_do_you/'>r/london/comments/ksp5ua/people_who_live_alone_in_london_which_area_do_you/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4atom/megathread_for_visitors_and_new_existing/'>r/london/comments/l4atom/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0kwog/updated_football_map_of_london/'>r/london/comments/l0kwog/updated_football_map_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/'>r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l692nd/worth_moving_to_london/'>r/london/comments/l692nd/worth_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/'>r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/</a></p>
</div>
<div label="oxford circus, 16" sentiment={0.14218287788600292}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8lrqf/oxford_circus_january_2021/'>r/london/comments/l8lrqf/oxford_circus_january_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq7sgj/oxford_circus_new_years_day_tier_4_friday_night/'>r/london/comments/kq7sgj/oxford_circus_new_years_day_tier_4_friday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/'>r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyia01/car_cloned_in_hackney_lets_play_spot_the/'>r/london/comments/kyia01/car_cloned_in_hackney_lets_play_spot_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4osdr/oxford_circus/'>r/london/comments/l4osdr/oxford_circus/</a></p>
</div>
<div label="greater london, 16" sentiment={0.24368923611111115}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpnqap/london_has_some_unreal_sunsets_ig_joshuamolony/'>r/london/comments/kpnqap/london_has_some_unreal_sunsets_ig_joshuamolony/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/'>r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp0l31/what_makes_one_a_londoner/'>r/london/comments/kp0l31/what_makes_one_a_londoner/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0kwog/updated_football_map_of_london/'>r/london/comments/l0kwog/updated_football_map_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l98ww4/weekend_edition_what_are_your_daily_observations/'>r/london/comments/l98ww4/weekend_edition_what_are_your_daily_observations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/'>r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/</a></p>
</div>
<div label="hs2, 16" sentiment={0.15345982142857145}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksqyqi/euston_square_gardens_commine/'>r/london/comments/ksqyqi/euston_square_gardens_commine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l62kxf/new_underground_labyrinth_of_tunnels_dug_in/'>r/london/comments/l62kxf/new_underground_labyrinth_of_tunnels_dug_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/'>r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/</a></p>
</div>
<div label="trafalgar square, 15" sentiment={-0.010722222222222218}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwk496/anyone_been_watching_pretend_its_a_city_and_have/'>r/london/comments/kwk496/anyone_been_watching_pretend_its_a_city_and_have/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx6qyp/horatio_nelson_along_with_his_military_successes/'>r/london/comments/kx6qyp/horatio_nelson_along_with_his_military_successes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4kort/planning_a_visit_to_london_postcovid_places_to/'>r/london/comments/l4kort/planning_a_visit_to_london_postcovid_places_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l5bzst/trafalgar_square_in_the_winter_of_1963_1/'>r/london/comments/l5bzst/trafalgar_square_in_the_winter_of_1963_1/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/'>r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt7kij/hyperlapse_through_cannon_street/'>r/london/comments/kt7kij/hyperlapse_through_cannon_street/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xwzw/london_buses_turned_into_ambulances_to_ease_covid/'>r/london/comments/l1xwzw/london_buses_turned_into_ambulances_to_ease_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzjgjo/help_me_remember_a_bus_route/'>r/london/comments/kzjgjo/help_me_remember_a_bus_route/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszleg/what_imagery_do_londoners_associate_with_london/'>r/london/comments/kszleg/what_imagery_do_londoners_associate_with_london/</a></p>
</div>
<div label="londoner, 15" sentiment={0.09567070707070707}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/'>r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kled6w/megathread_for_visitors_and_new_existing/'>r/london/comments/kled6w/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l86rvi/how_many_different_english_accents_do_londoners/'>r/london/comments/l86rvi/how_many_different_english_accents_do_londoners/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz3ywq/thankyou_london/'>r/london/comments/kz3ywq/thankyou_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l692nd/worth_moving_to_london/'>r/london/comments/l692nd/worth_moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpjg5u/how_old_are_londoners_when_they_marry_for_the/'>r/london/comments/kpjg5u/how_old_are_londoners_when_they_marry_for_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp0l31/what_makes_one_a_londoner/'>r/london/comments/kp0l31/what_makes_one_a_londoner/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/'>r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzve49/help_my_mum_lost_her_things_on_the_way_to_work/'>r/london/comments/kzve49/help_my_mum_lost_her_things_on_the_way_to_work/</a></p>
</div>
<div label="leicester square, 14" sentiment={-0.001961580086580083}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwk496/anyone_been_watching_pretend_its_a_city_and_have/'>r/london/comments/kwk496/anyone_been_watching_pretend_its_a_city_and_have/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz2eqx/earlier_today_i_posted_a_photo_of_leicester/'>r/london/comments/kz2eqx/earlier_today_i_posted_a_photo_of_leicester/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyq0gb/piles_of_rubbish_during_the_winter_of_discontent/'>r/london/comments/kyq0gb/piles_of_rubbish_during_the_winter_of_discontent/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktvtwh/train_stations_with_pubs_in_london/'>r/london/comments/ktvtwh/train_stations_with_pubs_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz2fif/earlier_today_i_posted_a_photo_of_leicester/'>r/london/comments/kz2fif/earlier_today_i_posted_a_photo_of_leicester/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxyz5r/canary_wharf_could_move_into_zone_1_under_new_tfl/'>r/london/comments/kxyz5r/canary_wharf_could_move_into_zone_1_under_new_tfl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz803f/my_mum_took_this_photo_leicester_square_maybe/'>r/london/comments/kz803f/my_mum_took_this_photo_leicester_square_maybe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
</div>
<div label="brentford, 14" sentiment={0.020766594516594523}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/'>r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3n6a1/food_delivery_service_in_benford_area/'>r/london/comments/l3n6a1/food_delivery_service_in_benford_area/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/'>r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kws9i7/about_moving_to_hounslow_around_hounslow_central/'>r/london/comments/kws9i7/about_moving_to_hounslow_around_hounslow_central/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/'>r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/</a></p>
</div>
<div label="raf, 14" sentiment={-0.010912698412698424}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvsb8o/sonic_boom_after_raf_jets_sent_to_intercept/'>r/london/comments/kvsb8o/sonic_boom_after_raf_jets_sent_to_intercept/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/'>r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky6f3r/rhyme_during_football_match_halftime/'>r/london/comments/ky6f3r/rhyme_during_football_match_halftime/</a></p>
</div>
<div label="netflix, 14" sentiment={0.11546881149153876}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/'>r/london/comments/l36r7v/khan_london_mayor_calls_for_wearing_of_masks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3u9j/what_are_your_daily_observations_040120/'>r/london/comments/kq3u9j/what_are_your_daily_observations_040120/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt1fab/we_spotted_dhl_doing_a_delivery_cargo_cyclist/'>r/london/comments/kt1fab/we_spotted_dhl_doing_a_delivery_cargo_cyclist/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krn0zy/lockdown_things_to_do_help_advice/'>r/london/comments/krn0zy/lockdown_things_to_do_help_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
</div>
<div label="bush, 14" sentiment={-0.04877886002886002}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kupszw/these_frisky_foxes_are_getting_more_action_than_me/'>r/london/comments/kupszw/these_frisky_foxes_are_getting_more_action_than_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwdiey/ladbroke_grove/'>r/london/comments/kwdiey/ladbroke_grove/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l08q96/beware_cyclists_snatchers_on_baker_street/'>r/london/comments/l08q96/beware_cyclists_snatchers_on_baker_street/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kol4xo/peckham/'>r/london/comments/kol4xo/peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/'>r/london/comments/kv7b3g/have_any_of_you_guys_figured_out_or_witnessed_any/</a></p>
</div>
<div label="topshop, 14" sentiment={0.06021825396825397}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/'>r/london/comments/kr1vu2/topshops_oxford_street_flagship_store_has_closed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
</div>
<div label="ev, 14" sentiment={0.10401109307359309}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyrv8w/ev_car_for_first_car_in_london_would_this_be/'>r/london/comments/kyrv8w/ev_car_for_first_car_in_london_would_this_be/</a></p>
</div>
<div label="asda, 13" sentiment={0.12631410256410255}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kodhj2/anyone_know_if_any_pharmacy_is_open_in_the_east/'>r/london/comments/kodhj2/anyone_know_if_any_pharmacy_is_open_in_the_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9v0o/where_can_i_go_buy_a_nintendo_switch/'>r/london/comments/kq9v0o/where_can_i_go_buy_a_nintendo_switch/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/'>r/london/comments/kptt5b/oc_every_i_earned_and_spent_living_in_london_2020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l80hsq/im_a_lockdown_alcoholic/'>r/london/comments/l80hsq/im_a_lockdown_alcoholic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kws9i7/about_moving_to_hounslow_around_hounslow_central/'>r/london/comments/kws9i7/about_moving_to_hounslow_around_hounslow_central/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
</div>
<div label="notting hill, 13" sentiment={0.07414529914529913}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyq4fz/abandoned_buildings_in_powis_square_1978/'>r/london/comments/kyq4fz/abandoned_buildings_in_powis_square_1978/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwdiey/ladbroke_grove/'>r/london/comments/kwdiey/ladbroke_grove/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvcgq0/solo_basketball_in_the_local_park_during_lockdown/'>r/london/comments/kvcgq0/solo_basketball_in_the_local_park_during_lockdown/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyq1kh/nothing_hill_1976/'>r/london/comments/kyq1kh/nothing_hill_1976/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/'>r/london/comments/l3dqzp/if_theres_one_thing_i_cant_stand_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksqm3e/missing_london/'>r/london/comments/ksqm3e/missing_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/'>r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8wlzs/notting_hill_last_summer_during_lockdown_1/'>r/london/comments/l8wlzs/notting_hill_last_summer_during_lockdown_1/</a></p>
</div>
<div label="🏻, 13" sentiment={-0.013675213675213679}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktcq06/freezing_foggy_city_of_london/'>r/london/comments/ktcq06/freezing_foggy_city_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzqwh9/there_are_three_colonies_of_feral_nonnative_rat/'>r/london/comments/kzqwh9/there_are_three_colonies_of_feral_nonnative_rat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l17da8/brixton_on_film_2019/'>r/london/comments/l17da8/brixton_on_film_2019/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz3ywq/thankyou_london/'>r/london/comments/kz3ywq/thankyou_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvllu2/what_are_your_daily_observations_120121/'>r/london/comments/kvllu2/what_are_your_daily_observations_120121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1gsm/what_are_your_daily_observations_140121/'>r/london/comments/kx1gsm/what_are_your_daily_observations_140121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwcudi/after_a_year_without_live_music_i_decided_to/'>r/london/comments/kwcudi/after_a_year_without_live_music_i_decided_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l23u5m/zipcar_damage_fee_waiver/'>r/london/comments/l23u5m/zipcar_damage_fee_waiver/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/'>r/london/comments/kv9umx/received_this_covid_disinformation_leaflet/</a></p>
</div>
<div label="eurostar, 13" sentiment={0.11903846153846152}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2lcmg/waterloo_yesterday/'>r/london/comments/l2lcmg/waterloo_yesterday/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/'>r/london/comments/kotsh2/london_has_bid_farewell_to_the_class_332_electric/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/'>r/london/comments/kxt1pu/london_is_a_trap_the_people_who_left_the_capital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0hq5h/what_are_looking_forward_to_doing_in_the_after/'>r/london/comments/l0hq5h/what_are_looking_forward_to_doing_in_the_after/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/'>r/london/comments/kylpyl/cost_of_day_trips_out_of_london_have_they_gone_up/</a></p>
</div>
<div label="o2, 12" sentiment={0.10936568061568062}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko7sue/anyone_who_lived_near_the_areas_in_the_fireworks/'>r/london/comments/ko7sue/anyone_who_lived_near_the_areas_in_the_fireworks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/'>r/london/comments/kte3js/a_month_ago_today_my_girlfriend_called_111/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1fer/bbc_news_nye_countdown_segment_were_they_live/'>r/london/comments/ko1fer/bbc_news_nye_countdown_segment_were_they_live/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/'>r/london/comments/ko29p7/london_2021_fireworks_shouldnt_be_centralised_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/'>r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/'>r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwcudi/after_a_year_without_live_music_i_decided_to/'>r/london/comments/kwcudi/after_a_year_without_live_music_i_decided_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwmvpx/i_got_a_brand_new_iphone_12_max_in_the_post_and_i/'>r/london/comments/kwmvpx/i_got_a_brand_new_iphone_12_max_in_the_post_and_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko7y5v/fireworks_over_west_south_and_east/'>r/london/comments/ko7y5v/fireworks_over_west_south_and_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxsfsy/details_of_tfl_fares_package_announced_overall/'>r/london/comments/kxsfsy/details_of_tfl_fares_package_announced_overall/</a></p>
</div>
<div label="ucl, 12" sentiment={0.14594907407407406}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpjwat/opinions_on_new_college_of_the_humanities/'>r/london/comments/kpjwat/opinions_on_new_college_of_the_humanities/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2ii8k/anyone_have_any_recommendations_for_a_university/'>r/london/comments/l2ii8k/anyone_have_any_recommendations_for_a_university/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky6cem/the_old_sciencetech_library_in_london/'>r/london/comments/ky6cem/the_old_sciencetech_library_in_london/</a></p>
</div>
<div label="lewisham, 12" sentiment={0.25065736732403404}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/'>r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/'>r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/</a></p>
</div>
<div label="nextdoor, 12" sentiment={0.12534722222222222}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/'>r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7v77l/does_on_here_know_of_any_gotos_for_when_a_bike/'>r/london/comments/l7v77l/does_on_here_know_of_any_gotos_for_when_a_bike/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx2r1q/any_charity_shops_accepting_furniture_donations/'>r/london/comments/kx2r1q/any_charity_shops_accepting_furniture_donations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuxzxa/what_are_your_daily_observations_110121/'>r/london/comments/kuxzxa/what_are_your_daily_observations_110121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq6ubs/vibrations_from_silvertown_tunnel_project/'>r/london/comments/kq6ubs/vibrations_from_silvertown_tunnel_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koa3ee/a_welllooked_after_dog_has_showed_up_outside_my/'>r/london/comments/koa3ee/a_welllooked_after_dog_has_showed_up_outside_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv8h90/donating_winter_clothes/'>r/london/comments/kv8h90/donating_winter_clothes/</a></p>
</div>
<div label="pfizer, 12" sentiment={0.10269203514739228}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv2tgf/excel_to_open_as_citywide_vaccination_centre_this/'>r/london/comments/kv2tgf/excel_to_open_as_citywide_vaccination_centre_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/'>r/london/comments/kplvx1/londoners_what_are_you_looking_forward_to_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9e307/i_got_vaccinated_friday_night/'>r/london/comments/l9e307/i_got_vaccinated_friday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
</div>
<div label="airbnb, 12" sentiment={0.11179292929292929}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kled6w/megathread_for_visitors_and_new_existing/'>r/london/comments/kled6w/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/'>r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/'>r/london/comments/kpw3q9/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/'>r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpje57/help_me_run_salary_numbers_for_move_across_the/'>r/london/comments/kpje57/help_me_run_salary_numbers_for_move_across_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwdm24/is_it_common_for_landlords_to_rent_flats_longterm/'>r/london/comments/kwdm24/is_it_common_for_landlords_to_rent_flats_longterm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39af5/help_needed_on_rent_negotiations/'>r/london/comments/l39af5/help_needed_on_rent_negotiations/</a></p>
</div>
<div label="bank, 12" sentiment={0.07136694324194325}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksbes8/i_need_help_with_a_new_years_resolution/'>r/london/comments/ksbes8/i_need_help_with_a_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/'>r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/'>r/london/comments/kvt5eb/i_need_help_identifying_a_place_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/'>r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr5k7z/whats_it_like_living_in_the_docklands/'>r/london/comments/kr5k7z/whats_it_like_living_in_the_docklands/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxpsx7/what_are_your_daily_observations_150121/'>r/london/comments/kxpsx7/what_are_your_daily_observations_150121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/'>r/london/comments/ksn0j6/for_all_you_londoners_can_you_guys_share_all_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/'>r/london/comments/l2plpf/greenwich_is_so_beautiful_whats_your_favourite/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0d8kv/the_city_1970/'>r/london/comments/l0d8kv/the_city_1970/</a></p>
</div>
<div label="🤣, 12" sentiment={-0.08333333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kza5kr/unpopular_opinion_if_youre_fit_enough_to_walk_to/'>r/london/comments/kza5kr/unpopular_opinion_if_youre_fit_enough_to_walk_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1y3fy/london_in_the_autumn_is_hard_to_beat/'>r/london/comments/l1y3fy/london_in_the_autumn_is_hard_to_beat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktmo5u/how_would_you_compare_london_to_parts_of_la/'>r/london/comments/ktmo5u/how_would_you_compare_london_to_parts_of_la/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2onaj/22nd_jan_at_1320_glad_were_all_in_this_together/'>r/london/comments/l2onaj/22nd_jan_at_1320_glad_were_all_in_this_together/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/'>r/london/comments/l0qfh6/people_living_alone_how_are_you_doing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kriskl/what_are_your_daily_observations_060121/'>r/london/comments/kriskl/what_are_your_daily_observations_060121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kol4xo/peckham/'>r/london/comments/kol4xo/peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7shmb/the_weather_has_been_so_moody_recently/'>r/london/comments/l7shmb/the_weather_has_been_so_moody_recently/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/'>r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/</a></p>
</div>
<div label="st paul's, 11" sentiment={0.11856060606060606}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzu7tm/sunset_over_st_pauls/'>r/london/comments/kzu7tm/sunset_over_st_pauls/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uzkr/view_from_the_tate_modern_precovid/'>r/london/comments/l6uzkr/view_from_the_tate_modern_precovid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz6vzq/cool_blues/'>r/london/comments/kz6vzq/cool_blues/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/'>r/london/comments/kwncuo/places_to_visit_once_this_pandemic_in_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzyph8/here_are_some_more_interesting_pictures_of_how/'>r/london/comments/kzyph8/here_are_some_more_interesting_pictures_of_how/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/'>r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3a587/london_rainbow_behind_st_pauls_cathedral/'>r/london/comments/l3a587/london_rainbow_behind_st_pauls_cathedral/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/'>r/london/comments/kznif4/st_paul_cathedral_in_1970_the_wall_and_the_dome/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/'>r/london/comments/kqeoaz/do_you_consider_croydon_bromley_as_apart_of_london/</a></p>
</div>
<div label="starbucks, 11" sentiment={-0.005037878787878791}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7e42/lovely/'>r/london/comments/ky7e42/lovely/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kppdgi/public_toilets/'>r/london/comments/kppdgi/public_toilets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/'>r/london/comments/kpixew/ever_seen_westfields_empty_on_a_saturday_night/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l62kxf/new_underground_labyrinth_of_tunnels_dug_in/'>r/london/comments/l62kxf/new_underground_labyrinth_of_tunnels_dug_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l066ne/anyone_flown_out_of_heathrow_lately/'>r/london/comments/l066ne/anyone_flown_out_of_heathrow_lately/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqxywy/alternative_way_to_get_a_home_of_your_own_in/'>r/london/comments/kqxywy/alternative_way_to_get_a_home_of_your_own_in/</a></p>
</div>
<div label="king's cross, 11" sentiment={0.05090909090909091}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyrv8w/ev_car_for_first_car_in_london_would_this_be/'>r/london/comments/kyrv8w/ev_car_for_first_car_in_london_would_this_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksdtoa/best_area_to_live_in_around_king_x/'>r/london/comments/ksdtoa/best_area_to_live_in_around_king_x/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/'>r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/'>r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp0l31/what_makes_one_a_londoner/'>r/london/comments/kp0l31/what_makes_one_a_londoner/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktvtwh/train_stations_with_pubs_in_london/'>r/london/comments/ktvtwh/train_stations_with_pubs_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/'>r/london/comments/kzi2yf/megathread_for_visitors_and_new_existing/</a></p>
</div>
<div label="😉, 11" sentiment={0.14852617079889807}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krrg25/stratford_again_it_looks_like_this_year_wont_be/'>r/london/comments/krrg25/stratford_again_it_looks_like_this_year_wont_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyf5c4/which_university_is_better_for_masters_in/'>r/london/comments/kyf5c4/which_university_is_better_for_masters_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kphqik/good_nyc_deli_sandwich_or_some_quality_cured/'>r/london/comments/kphqik/good_nyc_deli_sandwich_or_some_quality_cured/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv041e/flying_out_of_heathrow_in_t4/'>r/london/comments/kv041e/flying_out_of_heathrow_in_t4/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3xq3a/we_all_have_windows_thank_you/'>r/london/comments/l3xq3a/we_all_have_windows_thank_you/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxpsx7/what_are_your_daily_observations_150121/'>r/london/comments/kxpsx7/what_are_your_daily_observations_150121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krsoan/looking_for_something_to_do_during_lockdown/'>r/london/comments/krsoan/looking_for_something_to_do_during_lockdown/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7dgxb/what_is_your_plan_of_action_if_someone_breaks/'>r/london/comments/l7dgxb/what_is_your_plan_of_action_if_someone_breaks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyyhke/anything_newbies_should_know_about_living_in/'>r/london/comments/kyyhke/anything_newbies_should_know_about_living_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3oxvx/inside_the_former_carlton_cinema_now_gracepoint/'>r/london/comments/l3oxvx/inside_the_former_carlton_cinema_now_gracepoint/</a></p>
</div>
<div label="haringey, 11" sentiment={0.13613406795224978}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpxec2/of_london_moving_compared_to_usual/'>r/london/comments/kpxec2/of_london_moving_compared_to_usual/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2y8eg/moving_to_london_location_suggestions_please/'>r/london/comments/l2y8eg/moving_to_london_location_suggestions_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2o6sk/novel_cycling_storage_ideas/'>r/london/comments/l2o6sk/novel_cycling_storage_ideas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/'>r/london/comments/l77yuz/live_in_north_london_and_recovered_from_covid/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kikliy/prospect_of_tottenham_gentrification/'>r/london/comments/kikliy/prospect_of_tottenham_gentrification/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9jrd3/view_from_my_apartment_in_north_london_a_few_days/'>r/london/comments/l9jrd3/view_from_my_apartment_in_north_london_a_few_days/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktyekw/is_25000_salary_enough_to_sustain_living_expenses/'>r/london/comments/ktyekw/is_25000_salary_enough_to_sustain_living_expenses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
</div>
<div label="new cross, 11" sentiment={0.10364193886921158}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8mbe0/just_some_t3485_in_elephant_and_castle_nothing_to/'>r/london/comments/l8mbe0/just_some_t3485_in_elephant_and_castle_nothing_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyg2cs/snowing/'>r/london/comments/kyg2cs/snowing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7syj5/nothing_stresses_me_out_more_than_thinking_i_have/'>r/london/comments/l7syj5/nothing_stresses_me_out_more_than_thinking_i_have/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/'>r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/</a></p>
</div>
<div label="deptford, 11" sentiment={0.002380952380952381}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/'>r/london/comments/kp8d14/how_good_is_goldsmiths_and_living_in_south_east/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/'>r/london/comments/l0gqjj/takeaway_tuesday_discussion_thread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwel7q/the_big_cig_incinerator_angel_edmonton_seen_from/'>r/london/comments/kwel7q/the_big_cig_incinerator_angel_edmonton_seen_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/'>r/london/comments/kz7o3q/youre_offered_a_450k_property_in_one_of_these/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt9v59/deptford_flash_whats_going_on/'>r/london/comments/kt9v59/deptford_flash_whats_going_on/</a></p>
</div>
<div label="zoopla, 11" sentiment={0.17114898989898988}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt1jb9/how_realistic_is_to_rent_a_1_bed_flat_for_900/'>r/london/comments/kt1jb9/how_realistic_is_to_rent_a_1_bed_flat_for_900/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/'>r/london/comments/ky7ec5/rents_staying_the_same_while_london_is_empty/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kled6w/megathread_for_visitors_and_new_existing/'>r/london/comments/kled6w/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktrz7p/moving_to_london/'>r/london/comments/ktrz7p/moving_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l9flat/price_check_request_1br_flat_within_5_minutes_of/'>r/london/comments/l9flat/price_check_request_1br_flat_within_5_minutes_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksazkd/to_all_delivery_drivers_i_appreciate_you_and_am/'>r/london/comments/ksazkd/to_all_delivery_drivers_i_appreciate_you_and_am/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1tt22/what_are_your_daily_observations_210121/'>r/london/comments/l1tt22/what_are_your_daily_observations_210121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kww4r4/negotiating_sale_price_in_london_is_1215_drop_a/'>r/london/comments/kww4r4/negotiating_sale_price_in_london_is_1215_drop_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l13wgj/should_i_move_to_london/'>r/london/comments/l13wgj/should_i_move_to_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/'>r/london/comments/l1xni2/london_renters_look_set_to_leave_the_capital_for/</a></p>
</div>
<div label="crystal palace, 11" sentiment={0.1794805194805195}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwbyaj/spotted_in_peckham/'>r/london/comments/kwbyaj/spotted_in_peckham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq9cvp/renting_in_london_alone_this_year/'>r/london/comments/kq9cvp/renting_in_london_alone_this_year/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksbes8/i_need_help_with_a_new_years_resolution/'>r/london/comments/ksbes8/i_need_help_with_a_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0mepe/what_areas_from_zone_3_and_above_are_worth/'>r/london/comments/l0mepe/what_areas_from_zone_3_and_above_are_worth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4atom/megathread_for_visitors_and_new_existing/'>r/london/comments/l4atom/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kph2e9/walthamstow_vs_lewisham/'>r/london/comments/kph2e9/walthamstow_vs_lewisham/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/'>r/london/comments/kszban/southwark_council_just_put_this_fence_up_to/</a></p>
</div>
<div label="yeh, 11" sentiment={0.10952052997507543}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krwxg3/royal_mail_post_delays/'>r/london/comments/krwxg3/royal_mail_post_delays/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/'>r/london/comments/kyczxa/dont_want_to_leave_london_but_london_has_left_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l17ab9/im_an_18yearold_american_moving_to_london_or/'>r/london/comments/l17ab9/im_an_18yearold_american_moving_to_london_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l05ixp/when_do_you_think_this_lockdown_would_really_end/'>r/london/comments/l05ixp/when_do_you_think_this_lockdown_would_really_end/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8pgbp/brixton_2019_on_film/'>r/london/comments/l8pgbp/brixton_2019_on_film/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/'>r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1gsm/what_are_your_daily_observations_140121/'>r/london/comments/kx1gsm/what_are_your_daily_observations_140121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv4zui/what_would_you_change_about_london/'>r/london/comments/kv4zui/what_would_you_change_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kkmdaj/is_east_london_better_for_nights_out_than_west/'>r/london/comments/kkmdaj/is_east_london_better_for_nights_out_than_west/</a></p>
</div>
<div label="brent, 11" sentiment={0.14971271153089336}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/'>r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/'>r/london/comments/koc9sn/very_lucky_to_live_next_to_wembley_stadium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/'>r/london/comments/l2mlnb/covid_400person_wedding_party_in_stamford_hill/</a></p>
</div>
<div label="bishopsgate, 11" sentiment={0.10098714416896235}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyklh8/city_of_london_taken_back_in_october_2020/'>r/london/comments/kyklh8/city_of_london_taken_back_in_october_2020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/'>r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/'>r/london/comments/l99sft/timelapse_of_the_bus_trip_from_shoreditch_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpssl/the_perks_of_an_early_morning_commute/'>r/london/comments/ktpssl/the_perks_of_an_early_morning_commute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvev9g/manhattan_sky_gardens_stratford_electrical_fault/'>r/london/comments/kvev9g/manhattan_sky_gardens_stratford_electrical_fault/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0d8kv/the_city_1970/'>r/london/comments/l0d8kv/the_city_1970/</a></p>
</div>
<div label="newham, 10" sentiment={0.07044372294372293}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq8w4m/is_stratford_high_street_e15_a_decent_place_to/'>r/london/comments/kq8w4m/is_stratford_high_street_e15_a_decent_place_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7n9ia/newham_shisha_bar_shutdown_after_police_caught/'>r/london/comments/l7n9ia/newham_shisha_bar_shutdown_after_police_caught/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxw9xr/londons_cheapest_48hr_covid_test_for_traveling/'>r/london/comments/kxw9xr/londons_cheapest_48hr_covid_test_for_traveling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/'>r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv4zui/what_would_you_change_about_london/'>r/london/comments/kv4zui/what_would_you_change_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/'>r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/</a></p>
</div>
<div label="fulham, 10" sentiment={0.1416666666666667}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/'>r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kykh5x/fulham_and_airplane_noise/'>r/london/comments/kykh5x/fulham_and_airplane_noise/</a></p>
</div>
<div label="twitter, 10" sentiment={0.13631944444444447}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koeg6v/what_company_was_controlling_the_drones_at_the/'>r/london/comments/koeg6v/what_company_was_controlling_the_drones_at_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksjfcd/hospitals_in_london_set_to_run_out_of_beds_in_a/'>r/london/comments/ksjfcd/hospitals_in_london_set_to_run_out_of_beds_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2z9sr/100_years_ago_today_22_january_1921_the_first/'>r/london/comments/l2z9sr/100_years_ago_today_22_january_1921_the_first/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kw20gu/shock_as_jewish_homes_in_london_vandalized_with/'>r/london/comments/kw20gu/shock_as_jewish_homes_in_london_vandalized_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kppdgi/public_toilets/'>r/london/comments/kppdgi/public_toilets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks87ah/what_are_your_daily_observations_070121/'>r/london/comments/ks87ah/what_are_your_daily_observations_070121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/koa3ee/a_welllooked_after_dog_has_showed_up_outside_my/'>r/london/comments/koa3ee/a_welllooked_after_dog_has_showed_up_outside_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/'>r/london/comments/l0gs2t/uber_to_offer_free_rides_to_the_vaccination/</a></p>
</div>
<div label="ilford, 10" sentiment={-0.03204761904761905}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/'>r/london/comments/l3ay44/stratford_as_seen_from_hackney_marshes_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
</div>
<div label="hackney wick, 10" sentiment={0.17416666666666666}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l4atom/megathread_for_visitors_and_new_existing/'>r/london/comments/l4atom/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqby3a/passed_these_little_gems_a_few_weeks_back_whilst/'>r/london/comments/kqby3a/passed_these_little_gems_a_few_weeks_back_whilst/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/'>r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7dq4n/buying_property_in_london/'>r/london/comments/l7dq4n/buying_property_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv4zui/what_would_you_change_about_london/'>r/london/comments/kv4zui/what_would_you_change_about_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wjzt/what_area_to_look_for_creative_livework_space_for/'>r/london/comments/l3wjzt/what_area_to_look_for_creative_livework_space_for/</a></p>
</div>
<div label="primrose hill, 10" sentiment={0.007083333333333336}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8x7mh/does_anyone_know_where_this_is_im_guessing_its/'>r/london/comments/l8x7mh/does_anyone_know_where_this_is_im_guessing_its/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzxboq/best_places_to_run_in_london/'>r/london/comments/kzxboq/best_places_to_run_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/'>r/london/comments/kqa2jv/what_are_your_goals_for_january_accountability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/'>r/london/comments/kzh7pi/whatre_the_best_means_of_enjoying_a_daylong_break/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7vw43/possibly_the_best_view_in_london/'>r/london/comments/l7vw43/possibly_the_best_view_in_london/</a></p>
</div>
<div label="thatcher, 10" sentiment={-0.015208333333333334}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksc6h1/so_fked_off_with_buses/'>r/london/comments/ksc6h1/so_fked_off_with_buses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/'>r/london/comments/l1c4i1/average_london_house_price_exceeds_500000_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyq0gb/piles_of_rubbish_during_the_winter_of_discontent/'>r/london/comments/kyq0gb/piles_of_rubbish_during_the_winter_of_discontent/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kz2fif/earlier_today_i_posted_a_photo_of_leicester/'>r/london/comments/kz2fif/earlier_today_i_posted_a_photo_of_leicester/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krjeo4/were_all_doomed/'>r/london/comments/krjeo4/were_all_doomed/</a></p>
</div>
<div label="elephant, 9" sentiment={0.05753834642723531}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpl454/gymbox_users_please_help/'>r/london/comments/kpl454/gymbox_users_please_help/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8mbe0/just_some_t3485_in_elephant_and_castle_nothing_to/'>r/london/comments/l8mbe0/just_some_t3485_in_elephant_and_castle_nothing_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt2w9r/printers_in_elephant_and_castle/'>r/london/comments/kt2w9r/printers_in_elephant_and_castle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l20uws/how_did_this_happen/'>r/london/comments/l20uws/how_did_this_happen/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/'>r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/</a></p>
</div>
<div label="bow, 9" sentiment={0.08864197530864197}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksdtoa/best_area_to_live_in_around_king_x/'>r/london/comments/ksdtoa/best_area_to_live_in_around_king_x/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kr43rm/bow_is_a_bit_of_a_shithole/'>r/london/comments/kr43rm/bow_is_a_bit_of_a_shithole/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l78a3i/old_school_east_end_pubs/'>r/london/comments/l78a3i/old_school_east_end_pubs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/'>r/london/comments/ktpja4/is_bethnal_green_a_good_place_to_live_for_a_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l3wwsa/its_snowing/'>r/london/comments/l3wwsa/its_snowing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt3rgw/just_bought_a_home_in_bow_and_in_need_of_advice/'>r/london/comments/kt3rgw/just_bought_a_home_in_bow_and_in_need_of_advice/</a></p>
</div>
<div label="kcl, 9" sentiment={0.10648148148148147}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyklh8/city_of_london_taken_back_in_october_2020/'>r/london/comments/kyklh8/city_of_london_taken_back_in_october_2020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyf5c4/which_university_is_better_for_masters_in/'>r/london/comments/kyf5c4/which_university_is_better_for_masters_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpjwat/opinions_on_new_college_of_the_humanities/'>r/london/comments/kpjwat/opinions_on_new_college_of_the_humanities/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2ii8k/anyone_have_any_recommendations_for_a_university/'>r/london/comments/l2ii8k/anyone_have_any_recommendations_for_a_university/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvev9g/manhattan_sky_gardens_stratford_electrical_fault/'>r/london/comments/kvev9g/manhattan_sky_gardens_stratford_electrical_fault/</a></p>
</div>
<div label="vauxhall, 9" sentiment={-0.0252725669392336}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l27sqd/why_do_idiots_still_next_to_me_on_the_tube/'>r/london/comments/l27sqd/why_do_idiots_still_next_to_me_on_the_tube/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0tloi/the_big_dipper_in_battersea_park_part_of_a/'>r/london/comments/l0tloi/the_big_dipper_in_battersea_park_part_of_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krnk71/is_the_clapham_junction_area_nice/'>r/london/comments/krnk71/is_the_clapham_junction_area_nice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l19d8r/shard_in_the_dark_knight_mood/'>r/london/comments/l19d8r/shard_in_the_dark_knight_mood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0kwog/updated_football_map_of_london/'>r/london/comments/l0kwog/updated_football_map_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/'>r/london/comments/kuhsg2/paris_are_to_overhaul_the_champselysee_and_make/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/'>r/london/comments/kwsp4k/londoners_what_percentage_of_your_paycheck_goes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/'>r/london/comments/kvrdd9/did_any_one_else_feelhear_an_explosion_in_north/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/'>r/london/comments/kq4xwp/test_trains_have_travelled_along_the_new/</a></p>
</div>
<div label="the daily mail, 9" sentiment={-0.014814814814814817}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp36r0/regent_street_hyperlapse/'>r/london/comments/kp36r0/regent_street_hyperlapse/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1k8fn/mothers_violent_boyfriend_killed_threemonthold/'>r/london/comments/l1k8fn/mothers_violent_boyfriend_killed_threemonthold/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpsy9a/if_a_british_court_sends_assange_to_face_life_in/'>r/london/comments/kpsy9a/if_a_british_court_sends_assange_to_face_life_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp7pdj/in_a_stunningly_brave_and_classy_display_maskless/'>r/london/comments/kp7pdj/in_a_stunningly_brave_and_classy_display_maskless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/'>r/london/comments/ko1sfk/the_display_got_me_so_emotional_love_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/'>r/london/comments/l6uhtz/the_criticisms_of_london_mayor_2021_candidate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
</div>
<div label="ebay, 9" sentiment={0.0297979797979798}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/'>r/london/comments/kq51b8/self_explanatory_title_st_thomas_hospital/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l7v77l/does_on_here_know_of_any_gotos_for_when_a_bike/'>r/london/comments/l7v77l/does_on_here_know_of_any_gotos_for_when_a_bike/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8zn5y/gym_equipment_london/'>r/london/comments/l8zn5y/gym_equipment_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1gsm/what_are_your_daily_observations_140121/'>r/london/comments/kx1gsm/what_are_your_daily_observations_140121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt1c66/where_can_i_buy_a_skeleton_prop_in_london_during/'>r/london/comments/kt1c66/where_can_i_buy_a_skeleton_prop_in_london_during/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksxtbo/what_are_your_daily_observations_080121/'>r/london/comments/ksxtbo/what_are_your_daily_observations_080121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/'>r/london/comments/kqi2l9/england_back_into_lockdown_london_megathread/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt3z9u/dropped_my_phone_in_the_canal/'>r/london/comments/kt3z9u/dropped_my_phone_in_the_canal/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt2fbl/request_warner_bros_studio_tour_london/'>r/london/comments/kt2fbl/request_warner_bros_studio_tour_london/</a></p>
</div>
<div label="sainsburys, 9" sentiment={0.15720238095238095}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv3kru/makes_a_change_from_them_being_lobbed_in_the/'>r/london/comments/kv3kru/makes_a_change_from_them_being_lobbed_in_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqcu3u/i_will_be_shooting_a_video_that_requires_a_lot_of/'>r/london/comments/kqcu3u/i_will_be_shooting_a_video_that_requires_a_lot_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/'>r/london/comments/kvpiwg/my_printers_broken_and_i_need_to_print_a_document/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kppdgi/public_toilets/'>r/london/comments/kppdgi/public_toilets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kwdiey/ladbroke_grove/'>r/london/comments/kwdiey/ladbroke_grove/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv2s7j/how_is_abbey_wood/'>r/london/comments/kv2s7j/how_is_abbey_wood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzv015/if_given_a_chance_to_choose_would_you_stay/'>r/london/comments/kzv015/if_given_a_chance_to_choose_would_you_stay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0kwog/updated_football_map_of_london/'>r/london/comments/l0kwog/updated_football_map_of_london/</a></p>
</div>
<div label="daily mail, 9" sentiment={-0.0611111111111111}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l1k8fn/mothers_violent_boyfriend_killed_threemonthold/'>r/london/comments/l1k8fn/mothers_violent_boyfriend_killed_threemonthold/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kpsy9a/if_a_british_court_sends_assange_to_face_life_in/'>r/london/comments/kpsy9a/if_a_british_court_sends_assange_to_face_life_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx6qyp/horatio_nelson_along_with_his_military_successes/'>r/london/comments/kx6qyp/horatio_nelson_along_with_his_military_successes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kp7pdj/in_a_stunningly_brave_and_classy_display_maskless/'>r/london/comments/kp7pdj/in_a_stunningly_brave_and_classy_display_maskless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l6e0ns/brian_rose_did_a_livestream_from_his_bus_this/'>r/london/comments/l6e0ns/brian_rose_did_a_livestream_from_his_bus_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/'>r/london/comments/kq3tfe/any_guesses_on_tier_5_for_london/</a></p>
</div>
<div label="wanstead, 9" sentiment={0.14370370370370372}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kg7l0l/living_in_wanstead/'>r/london/comments/kg7l0l/living_in_wanstead/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/'>r/london/comments/kxdktw/where_to_buy_a_house_in_london_single_guy_young/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqs7v8/anyone_can_recommend_a_cat_vet_please/'>r/london/comments/kqs7v8/anyone_can_recommend_a_cat_vet_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kyg2cs/snowing/'>r/london/comments/kyg2cs/snowing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/'>r/london/comments/kv9cv8/oh_great_the_redbridge_covid_bus_has_arrived_were/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/'>r/london/comments/kqc0x1/why_do_a_lot_of_londoners_think_ilford_is_so_bad/</a></p>
</div>
<div label="boris johnson, 9" sentiment={0.19314814814814815}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/'>r/london/comments/kvpgf9/leaving_london_after_5_years_want_to_take_it_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/'>r/london/comments/kqvi47/has_any_of_your_family_members_been_offered_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/'>r/london/comments/l70l8i/rita_ora_should_be_charged_way_more_than_10k_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l0mepe/what_areas_from_zone_3_and_above_are_worth/'>r/london/comments/l0mepe/what_areas_from_zone_3_and_above_are_worth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/'>r/london/comments/ksnnun/boris_intervenes_to_resurrect_scrapped_hs2_bike/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l37euc/a_street_of_london/'>r/london/comments/l37euc/a_street_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kx1gsm/what_are_your_daily_observations_140121/'>r/london/comments/kx1gsm/what_are_your_daily_observations_140121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/'>r/london/comments/kt294y/sadiq_khan_declares_covid_emergency_in_london/</a></p>
</div>
<div label="enfield, 9" sentiment={0.01203703703703704}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8loux/the_story_of_the_battersea_poltergeist/'>r/london/comments/l8loux/the_story_of_the_battersea_poltergeist/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kv8m9u/twickenham_stadium_looks_like_something_out_of_a/'>r/london/comments/kv8m9u/twickenham_stadium_looks_like_something_out_of_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2y8eg/moving_to_london_location_suggestions_please/'>r/london/comments/l2y8eg/moving_to_london_location_suggestions_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kled6w/megathread_for_visitors_and_new_existing/'>r/london/comments/kled6w/megathread_for_visitors_and_new_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/'>r/london/comments/kueelb/what_would_you_say_are_the_suburbs_of_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8jzx7/the_sky_in_north_london_last_week/'>r/london/comments/l8jzx7/the_sky_in_north_london_last_week/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ku1ueq/do_you_need_to_book_your_test_in_advance/'>r/london/comments/ku1ueq/do_you_need_to_book_your_test_in_advance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l04d5y/yougov_what_counts_as_london_according_to/'>r/london/comments/l04d5y/yougov_what_counts_as_london_according_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/'>r/london/comments/l2jhey/i_was_told_by_rramen_to_post_this_here_im_selling/</a></p>
</div>
<div label="hounslow, 9" sentiment={0.04284927194018103}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/'>r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kws9i7/about_moving_to_hounslow_around_hounslow_central/'>r/london/comments/kws9i7/about_moving_to_hounslow_around_hounslow_central/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l85vvp/summer_in_west_london/'>r/london/comments/l85vvp/summer_in_west_london/</a></p>
</div>
<div label="morrisons, 9" sentiment={-0.15407407407407406}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/'>r/london/comments/krrv1m/whats_it_like_living_in_brentford_first_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l5yxbh/what_are_your_daily_observations_270121/'>r/london/comments/l5yxbh/what_are_your_daily_observations_270121/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l39w85/grocery_deliveries_in_london/'>r/london/comments/l39w85/grocery_deliveries_in_london/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/kzpq7q/what_are_your_daily_observations_180121/'>r/london/comments/kzpq7q/what_are_your_daily_observations_180121/</a></p>
</div>
<div label="russell square, 9" sentiment={0.013492063492063491}>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/'>r/london/comments/l8h2c9/the_i_am_feeling_you_mate_face_you_make_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/'>r/london/comments/ks5k5f/thinking_of_moving_to_soho_any_insights_on_living/</a></p>
</div>
        </Accordion>
        </div>



          <div className={styles.accordionColumn}><p><a target="_blank" href="https://www.reddit.com/r/aws/">reddit: r/aws/</a></p>
        <Accordion>
        <div label="aws, 1235" sentiment={0.09451124149558204}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8voio/looking_to_sell_on_aws_marketplace/'>r/aws/comments/l8voio/looking_to_sell_on_aws_marketplace/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0kwx9/network_acls_vs_security_groups/'>r/aws/comments/l0kwx9/network_acls_vs_security_groups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/'>r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq3ido/aws_managed_airflow_vs_astronomer/'>r/aws/comments/kq3ido/aws_managed_airflow_vs_astronomer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnxzs/adding_temporary_users_to_ssh_instance/'>r/aws/comments/krnxzs/adding_temporary_users_to_ssh_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/'>r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kod2dp/rotating_passwords/'>r/aws/comments/kod2dp/rotating_passwords/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/'>r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6b6il/sagemaker_losing_connection_to_my_kernel_is_it/'>r/aws/comments/l6b6il/sagemaker_losing_connection_to_my_kernel_is_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/'>r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp8530/serverless_deployment/'>r/aws/comments/kp8530/serverless_deployment/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksx3tm/issue_with_apsoutheast1_and_apsoutheast2/'>r/aws/comments/ksx3tm/issue_with_apsoutheast1_and_apsoutheast2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krezlv/how_to_loadbalance_grpc_on_aws/'>r/aws/comments/krezlv/how_to_loadbalance_grpc_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20xsl/advice_needed_for_db_query_in_aws/'>r/aws/comments/l20xsl/advice_needed_for_db_query_in_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxd81q/using_api_read_first_few_kb_of_data_from_the_s3/'>r/aws/comments/kxd81q/using_api_read_first_few_kb_of_data_from_the_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv53bu/cost_explorer_empty_after_leaving_organization/'>r/aws/comments/kv53bu/cost_explorer_empty_after_leaving_organization/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz9d1l/greenfield_aws_basic_questions/'>r/aws/comments/kz9d1l/greenfield_aws_basic_questions/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7yvoi/trigger_lambda_to_start_an_ec2_instance_based_on/'>r/aws/comments/l7yvoi/trigger_lambda_to_start_an_ec2_instance_based_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9a9ju/mongodb_set_replication_to_documentdb/'>r/aws/comments/l9a9ju/mongodb_set_replication_to_documentdb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/'>r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4lbuu/aws_integration_with_flutter_and_aws_otp/'>r/aws/comments/l4lbuu/aws_integration_with_flutter_and_aws_otp/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l41ga9/question_re_aws_cli/'>r/aws/comments/l41ga9/question_re_aws_cli/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/'>r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/'>r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksm58u/on_prem_oracle_with_tde_enabled_to_aws_rds_oracle/'>r/aws/comments/ksm58u/on_prem_oracle_with_tde_enabled_to_aws_rds_oracle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx3sju/replicate_documentdb_to_a_local_mongo_service/'>r/aws/comments/kx3sju/replicate_documentdb_to_a_local_mongo_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/'>r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxqqvq/calling_one_microservice_from_another/'>r/aws/comments/kxqqvq/calling_one_microservice_from_another/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l80u5l/change_managing_account/'>r/aws/comments/l80u5l/change_managing_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2m2il/replicate_eni_routes_for_connectivity_between/'>r/aws/comments/l2m2il/replicate_eni_routes_for_connectivity_between/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/'>r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/'>r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lps9/lambda_function_print/'>r/aws/comments/l1lps9/lambda_function_print/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6qwnf/is_it_possible_to_get_support_only_when_needed/'>r/aws/comments/l6qwnf/is_it_possible_to_get_support_only_when_needed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvingz/i_am_stuck_on_trying_to_connect_through_putty/'>r/aws/comments/kvingz/i_am_stuck_on_trying_to_connect_through_putty/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhaxa/dynamodb_ensuring_users_only_have_access_to_their/'>r/aws/comments/kzhaxa/dynamodb_ensuring_users_only_have_access_to_their/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kppqoq/what_would_be_the_cheapest_way_to_server_a_lot_of/'>r/aws/comments/kppqoq/what_would_be_the_cheapest_way_to_server_a_lot_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvqicx/microsoft_development_licences_on_aws/'>r/aws/comments/kvqicx/microsoft_development_licences_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv553z/week_of_january_11th_what_is_your_favorite_way_to/'>r/aws/comments/kv553z/week_of_january_11th_what_is_your_favorite_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/'>r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1p100/cognito_account_migration_from_old_aws_cognito/'>r/aws/comments/l1p100/cognito_account_migration_from_old_aws_cognito/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/'>r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6feqn/security_group_question/'>r/aws/comments/l6feqn/security_group_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l73qsv/cant_cancel_domain_registration_request_on_route/'>r/aws/comments/l73qsv/cant_cancel_domain_registration_request_on_route/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20pd1/cloud9_how_can_i_submit_a_test_payload_to_a/'>r/aws/comments/l20pd1/cloud9_how_can_i_submit_a_test_payload_to_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq74mq/any_info_on_when_mac_ec2_instances_will_be/'>r/aws/comments/kq74mq/any_info_on_when_mac_ec2_instances_will_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/'>r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzjyko/general_knowledge_aws_newbie/'>r/aws/comments/kzjyko/general_knowledge_aws_newbie/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlrhx/i_am_stumped_how_do_i_automate_a_python_script_on/'>r/aws/comments/ktlrhx/i_am_stumped_how_do_i_automate_a_python_script_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0ziln/why_is_aws_vpn_so_expensive/'>r/aws/comments/l0ziln/why_is_aws_vpn_so_expensive/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqhri9/lambda_container_images_long_cold_starts/'>r/aws/comments/kqhri9/lambda_container_images_long_cold_starts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0d06g/http_only_cookies_in_aws/'>r/aws/comments/l0d06g/http_only_cookies_in_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvnxd4/qovery_turns_app_deployment_on_aws_as_simple_as/'>r/aws/comments/kvnxd4/qovery_turns_app_deployment_on_aws_as_simple_as/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l57qm6/good_alternatives_to_newrelic_apm_to_monitor_aws/'>r/aws/comments/l57qm6/good_alternatives_to_newrelic_apm_to_monitor_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6shqy/aws_suddenly_not_recognising_my_headset/'>r/aws/comments/l6shqy/aws_suddenly_not_recognising_my_headset/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l627im/just_launched_my_first_ec2_instance_and_i_am/'>r/aws/comments/l627im/just_launched_my_first_ec2_instance_and_i_am/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv48zb/how_to_report_an_aws_employee/'>r/aws/comments/kv48zb/how_to_report_an_aws_employee/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0lyrj/week_of_january_18th_what_are_you_favorite_aws/'>r/aws/comments/l0lyrj/week_of_january_18th_what_are_you_favorite_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9dulw/problems_with_batch/'>r/aws/comments/l9dulw/problems_with_batch/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6i71n/has_anyone_used_aws_secure_environment_accelerator/'>r/aws/comments/l6i71n/has_anyone_used_aws_secure_environment_accelerator/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kod0m8/aws_hands_on_security_tutorial/'>r/aws/comments/kod0m8/aws_hands_on_security_tutorial/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kue382/very_low_bandwith_from_aws_vpc_to_internet/'>r/aws/comments/kue382/very_low_bandwith_from_aws_vpc_to_internet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzmnpn/where_to_get_the_6_months_experience/'>r/aws/comments/kzmnpn/where_to_get_the_6_months_experience/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/'>r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwnaza/aws_security_with_infosec_experience/'>r/aws/comments/kwnaza/aws_security_with_infosec_experience/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9k9xp/security_kpi_on_aws/'>r/aws/comments/l9k9xp/security_kpi_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/'>r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx90dv/aws_sso_and_user_management_in_a_multiaccount/'>r/aws/comments/kx90dv/aws_sso_and_user_management_in_a_multiaccount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktqsuy/parler_runs_on_aws/'>r/aws/comments/ktqsuy/parler_runs_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/'>r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/'>r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/'>r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krs9r3/aws_vs_azure_uptime_stats_20192020/'>r/aws/comments/krs9r3/aws_vs_azure_uptime_stats_20192020/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvpxg8/better_way_to_update_a_fleet_of_spot_instances/'>r/aws/comments/kvpxg8/better_way_to_update_a_fleet_of_spot_instances/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku390o/early_foundation_of_aws_a_backstory/'>r/aws/comments/ku390o/early_foundation_of_aws_a_backstory/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0t7aq/best_practice/'>r/aws/comments/l0t7aq/best_practice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/'>r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/'>r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/'>r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8clgs/do_you_still_have_traditional_servercolo_setups/'>r/aws/comments/l8clgs/do_you_still_have_traditional_servercolo_setups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koqs45/how_to_prevent_unexpected_billing_for_website/'>r/aws/comments/koqs45/how_to_prevent_unexpected_billing_for_website/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l95vpb/are_we_digging_our_own_grave/'>r/aws/comments/l95vpb/are_we_digging_our_own_grave/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/'>r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/'>r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2lm67/routes_for_eni_for_connectivity_between_vmware/'>r/aws/comments/l2lm67/routes_for_eni_for_connectivity_between_vmware/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/'>r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6muuk/partner_flyer_for_aws_ams/'>r/aws/comments/l6muuk/partner_flyer_for_aws_ams/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/'>r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzheeh/s3_aws_amplify_react_native_console_log_error/'>r/aws/comments/kzheeh/s3_aws_amplify_react_native_console_log_error/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszwa1/running_boinc_contribute_computation_resource_for/'>r/aws/comments/kszwa1/running_boinc_contribute_computation_resource_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6y9y7/deployment_stages_with_aws_lambda_and_api_gateway/'>r/aws/comments/l6y9y7/deployment_stages_with_aws_lambda_and_api_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwkmdt/disable_or_read_only_for_root_account_for_an/'>r/aws/comments/kwkmdt/disable_or_read_only_for_root_account_for_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/'>r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/'>r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxph1w/is_there_an_existing_tool_to_determine_what_iam/'>r/aws/comments/kxph1w/is_there_an_existing_tool_to_determine_what_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0qfku/closing_subaccount_in_organization/'>r/aws/comments/l0qfku/closing_subaccount_in_organization/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0rkaa/allow_other_users_to_startstop_ec2_instances/'>r/aws/comments/l0rkaa/allow_other_users_to_startstop_ec2_instances/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kykars/when_terminating_a_spot_instance_do_i_have_to/'>r/aws/comments/kykars/when_terminating_a_spot_instance_do_i_have_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/'>r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky9ywk/setting_file_size_limits_on_s3_put_using/'>r/aws/comments/ky9ywk/setting_file_size_limits_on_s3_put_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/'>r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ju2dg0/should_you_develop_your_entire_code_locally_first/'>r/aws/comments/ju2dg0/should_you_develop_your_entire_code_locally_first/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/konojg/using_terraform_013_with_aws_wildcard_certificates/'>r/aws/comments/konojg/using_terraform_013_with_aws_wildcard_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/'>r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/'>r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2luiq/mean_stack_blog_aws_services/'>r/aws/comments/l2luiq/mean_stack_blog_aws_services/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuqj0q/politics_aside_what_do_you_think_of_aws_blocking/'>r/aws/comments/kuqj0q/politics_aside_what_do_you_think_of_aws_blocking/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9kmz5/blog_news_from_aws_hashicorp_istio_and_linux/'>r/aws/comments/l9kmz5/blog_news_from_aws_hashicorp_istio_and_linux/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs2kx/slow_local_queries/'>r/aws/comments/kzs2kx/slow_local_queries/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kn9oqt/active_directory_on_ec2/'>r/aws/comments/kn9oqt/active_directory_on_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6af4/aws_site_terms/'>r/aws/comments/kq6af4/aws_site_terms/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0f70p/dx_gateway_with_transit_vif_vpn_options/'>r/aws/comments/l0f70p/dx_gateway_with_transit_vif_vpn_options/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8l9o6/aws_policy_to_restrict_iam_user_to_a_single_region/'>r/aws/comments/l8l9o6/aws_policy_to_restrict_iam_user_to_a_single_region/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw3sah/my_aws_ec2_instance_ran_out_of_space_i_increased/'>r/aws/comments/kw3sah/my_aws_ec2_instance_ran_out_of_space_i_increased/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l58q6j/how_to_use_systems_manager_for_a_service_outside/'>r/aws/comments/l58q6j/how_to_use_systems_manager_for_a_service_outside/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbcjb/where_do_you_get_video_training_from_for_the_aws/'>r/aws/comments/kvbcjb/where_do_you_get_video_training_from_for_the_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2lvrc/where_to_access_aws_console_as_a_student/'>r/aws/comments/l2lvrc/where_to_access_aws_console_as_a_student/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/'>r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr85tg/possibly_dumb_question_compare_allowed/'>r/aws/comments/kr85tg/possibly_dumb_question_compare_allowed/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2kve7/filtering_and_reporting_on_big_data_interactively/'>r/aws/comments/l2kve7/filtering_and_reporting_on_big_data_interactively/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1rr69/does_the_actual_cost_vary_in_aws_lightsail/'>r/aws/comments/l1rr69/does_the_actual_cost_vary_in_aws_lightsail/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx6q2y/how_to_run_aws_cis_checks_with_cloudquery/'>r/aws/comments/kx6q2y/how_to_run_aws_cis_checks_with_cloudquery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3t7ia/multiline_aws_cli_commands/'>r/aws/comments/l3t7ia/multiline_aws_cli_commands/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7kfc/microservice_orchestration_through_aws_step/'>r/aws/comments/ky7kfc/microservice_orchestration_through_aws_step/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3vrcn/when_will_codepipeline_get_a_manual_rollback/'>r/aws/comments/l3vrcn/when_will_codepipeline_get_a_manual_rollback/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/'>r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1ice3/step_functions_and_uncaught_exceptions/'>r/aws/comments/l1ice3/step_functions_and_uncaught_exceptions/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uhzl/do_aws_credits_accumulate_or_i_can_only_use/'>r/aws/comments/l7uhzl/do_aws_credits_accumulate_or_i_can_only_use/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l30uzn/aws_site_to_site_vpn_tgw_load_balancing_algorithm/'>r/aws/comments/l30uzn/aws_site_to_site_vpn_tgw_load_balancing_algorithm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2px4q/3_steps_to_create_your_first_api_in_aws_using_api/'>r/aws/comments/l2px4q/3_steps_to_create_your_first_api_in_aws_using_api/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/'>r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1faud/why_ec2_is_giving_me_private_key_it_wont_accept/'>r/aws/comments/l1faud/why_ec2_is_giving_me_private_key_it_wont_accept/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5ydlo/help_needed_for_amazon_interview/'>r/aws/comments/l5ydlo/help_needed_for_amazon_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/'>r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2lk2g/how_to_deploy_django_django_2_services_react_app/'>r/aws/comments/l2lk2g/how_to_deploy_django_django_2_services_react_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/'>r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko05gd/thoughts_on_using_encrypted_parameter_store_or/'>r/aws/comments/ko05gd/thoughts_on_using_encrypted_parameter_store_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ie67ho/any_eta_on_aurora_postgresql_12/'>r/aws/comments/ie67ho/any_eta_on_aurora_postgresql_12/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/'>r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/'>r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/'>r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwv88f/aws_vs_azure_security_career/'>r/aws/comments/kwv88f/aws_vs_azure_security_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jsgn9x/realworld_aws_timestream_ingest_performance/'>r/aws/comments/jsgn9x/realworld_aws_timestream_ingest_performance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kubw7o/aws_quicksight_desktop_for_windows_and_macos_are/'>r/aws/comments/kubw7o/aws_quicksight_desktop_for_windows_and_macos_are/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/'>r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvfec9/does_s3_work_for_this_requirement/'>r/aws/comments/kvfec9/does_s3_work_for_this_requirement/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/'>r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kppt1o/python_script_runs_fine_from_computer_but_not_on/'>r/aws/comments/kppt1o/python_script_runs_fine_from_computer_but_not_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/'>r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knw7m8/fun_free_services_with_aws/'>r/aws/comments/knw7m8/fun_free_services_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/'>r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jswboh/amazon_workspace_employee_monitoring/'>r/aws/comments/jswboh/amazon_workspace_employee_monitoring/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/'>r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz9y5r/aws_single_signon_with_azuread_aws_account/'>r/aws/comments/kz9y5r/aws_single_signon_with_azuread_aws_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxy1u6/centralizing_smtp_usage_across_multiple_projects/'>r/aws/comments/kxy1u6/centralizing_smtp_usage_across_multiple_projects/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/'>r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqpqh4/aws_vault_is_a_tool_to_securely_store_and_access/'>r/aws/comments/kqpqh4/aws_vault_is_a_tool_to_securely_store_and_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kshkkg/how_to_set_environment_variable_in_ec2/'>r/aws/comments/kshkkg/how_to_set_environment_variable_in_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt7h48/glue_development_endpoint_pricing/'>r/aws/comments/kt7h48/glue_development_endpoint_pricing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8lm5t/looking_to_learn_how_to_create_a_serverless/'>r/aws/comments/l8lm5t/looking_to_learn_how_to_create_a_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/'>r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1tfy4/suggestion_intergating_amazon_coginto_with_aws/'>r/aws/comments/l1tfy4/suggestion_intergating_amazon_coginto_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/'>r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvscph/ssl_certificates/'>r/aws/comments/kvscph/ssl_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/'>r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv7b7q/how_to_enable_logging_on_every_aws_service_in/'>r/aws/comments/kv7b7q/how_to_enable_logging_on_every_aws_service_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/'>r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kozkf3/i_have_credits_but_isnt_clear_that_im_using_then/'>r/aws/comments/kozkf3/i_have_credits_but_isnt_clear_that_im_using_then/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvw5p7/accessing_aws_ec2_via_ssh_without_exposing_the_ssh/'>r/aws/comments/kvw5p7/accessing_aws_ec2_via_ssh_without_exposing_the_ssh/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9felf/need_help_and_advice_on_purchasing_aws_software/'>r/aws/comments/l9felf/need_help_and_advice_on_purchasing_aws_software/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/'>r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/'>r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6thqs/https_with_eks_and_load_balancer/'>r/aws/comments/l6thqs/https_with_eks_and_load_balancer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq5znt/aws_ip_inventory/'>r/aws/comments/kq5znt/aws_ip_inventory/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/'>r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr7k5f/anyone_looking_for_a_new_gig_im_an_architect_for/'>r/aws/comments/kr7k5f/anyone_looking_for_a_new_gig_im_an_architect_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/'>r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1kqa2/k8s_alb_ingress_controller/'>r/aws/comments/l1kqa2/k8s_alb_ingress_controller/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ixh908/deploy_cloudformation_stacks_and_manage_aws/'>r/aws/comments/ixh908/deploy_cloudformation_stacks_and_manage_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/'>r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fkn1/listcopysynccompare_s3_buckets_5x50x_faster_than/'>r/aws/comments/l3fkn1/listcopysynccompare_s3_buckets_5x50x_faster_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqterp/lambda_a_invoking_lambda_b_no_lambda_b_logs/'>r/aws/comments/kqterp/lambda_a_invoking_lambda_b_no_lambda_b_logs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyxb1/how_do_you_properly_store_your_access_and_refresh/'>r/aws/comments/kvyxb1/how_do_you_properly_store_your_access_and_refresh/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5d00u/get_started_with_aws_s3/'>r/aws/comments/l5d00u/get_started_with_aws_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5u2g/i_built_custom_rss_news_feeds_for_each_aws/'>r/aws/comments/kv5u2g/i_built_custom_rss_news_feeds_for_each_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1xa8t/aws_workspaces_client_update_no_admin/'>r/aws/comments/l1xa8t/aws_workspaces_client_update_no_admin/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuftpl/applying_cloudwatch_config_through_userdata/'>r/aws/comments/kuftpl/applying_cloudwatch_config_through_userdata/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kseqew/how_do_you_view_the_data_in_dynamodb_from_your/'>r/aws/comments/kseqew/how_do_you_view_the_data_in_dynamodb_from_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/'>r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqpwsm/aws_lambda_question_on_concurrency_scaling/'>r/aws/comments/kqpwsm/aws_lambda_question_on_concurrency_scaling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko6wan/automated_system_keep_rejecting_ses_sandbox_out/'>r/aws/comments/ko6wan/automated_system_keep_rejecting_ses_sandbox_out/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxukrb/twitter_taps_aws_for_its_latest_foray_into_the/'>r/aws/comments/kxukrb/twitter_taps_aws_for_its_latest_foray_into_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz4jn8/aws_console_sit_cant_be_reached/'>r/aws/comments/kz4jn8/aws_console_sit_cant_be_reached/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l59zjl/examples_for_programatically_creating_the/'>r/aws/comments/l59zjl/examples_for_programatically_creating_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9bcol/blazingly_fast_app_deployment_on_aws_in_30/'>r/aws/comments/l9bcol/blazingly_fast_app_deployment_on_aws_in_30/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksgcyz/aws_iot_lorawan_services_question_is_are_gateways/'>r/aws/comments/ksgcyz/aws_iot_lorawan_services_question_is_are_gateways/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/'>r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3tgml/level_of_anonymity_using_aws/'>r/aws/comments/l3tgml/level_of_anonymity_using_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1j7au/ecs_fargate_hosting_multiple_applicationswebsites/'>r/aws/comments/l1j7au/ecs_fargate_hosting_multiple_applicationswebsites/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b8sz/best_region_for_getting_data_out_from_china_as/'>r/aws/comments/l1b8sz/best_region_for_getting_data_out_from_china_as/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pbpc/aws_cloud_security_project_capstone/'>r/aws/comments/l0pbpc/aws_cloud_security_project_capstone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyz25m/aws_codecommit_and_codebuild_question/'>r/aws/comments/kyz25m/aws_codecommit_and_codebuild_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/'>r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq1e8j/deploying_with_s3_storage/'>r/aws/comments/kq1e8j/deploying_with_s3_storage/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/'>r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4ush/from_this_guide_any_tips_for_ubuntu_aws_hardening/'>r/aws/comments/ko4ush/from_this_guide_any_tips_for_ubuntu_aws_hardening/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/'>r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvdzr/database_migration_service_question/'>r/aws/comments/kvvdzr/database_migration_service_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2abyl/what_is_the_best_way_to_limit_outbound_traffic/'>r/aws/comments/l2abyl/what_is_the_best_way_to_limit_outbound_traffic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksjplz/spot_blocks_whats_happening/'>r/aws/comments/ksjplz/spot_blocks_whats_happening/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpqfxo/monthly_budgets_using_custom_start_date/'>r/aws/comments/kpqfxo/monthly_budgets_using_custom_start_date/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku2s86/aws_is_the_host_for_parlercom_it_would_be_a_shame/'>r/aws/comments/ku2s86/aws_is_the_host_for_parlercom_it_would_be_a_shame/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzkl8o/how_to_test_lambda_function_locally_on_in_cloud9/'>r/aws/comments/kzkl8o/how_to_test_lambda_function_locally_on_in_cloud9/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqdhbc/best_way_to_build_a_python_lambda_layer/'>r/aws/comments/kqdhbc/best_way_to_build_a_python_lambda_layer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/'>r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qwei/how_to_minimize_crossaz_traffic_costs_when_using/'>r/aws/comments/l2qwei/how_to_minimize_crossaz_traffic_costs_when_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/'>r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/'>r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksosyg/aws_step_functions_and_chunking_data/'>r/aws/comments/ksosyg/aws_step_functions_and_chunking_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7gp3/beginner_training_for_cloudformation/'>r/aws/comments/ky7gp3/beginner_training_for_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/'>r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/'>r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvistk/s3_static_website_configuration/'>r/aws/comments/kvistk/s3_static_website_configuration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwgkbc/migrating_out_of_aws_to_traditional_datacenter/'>r/aws/comments/kwgkbc/migrating_out_of_aws_to_traditional_datacenter/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq0iyw/does_aws_free_tier_start_when_your_account_is/'>r/aws/comments/kq0iyw/does_aws_free_tier_start_when_your_account_is/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krcyoj/the_fact_that_you_cant_set_up_a_free_learning/'>r/aws/comments/krcyoj/the_fact_that_you_cant_set_up_a_free_learning/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6eiwi/how_to_reuse_onprem_licensing_in_the_cloud/'>r/aws/comments/l6eiwi/how_to_reuse_onprem_licensing_in_the_cloud/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvq93e/frustrated_with_cli_on_powershell/'>r/aws/comments/kvq93e/frustrated_with_cli_on_powershell/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kstihy/aws_encryption_sdk_nodejs/'>r/aws/comments/kstihy/aws_encryption_sdk_nodejs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyd0mz/job_interview_with_aws/'>r/aws/comments/kyd0mz/job_interview_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8p02i/security_assessment_help/'>r/aws/comments/l8p02i/security_assessment_help/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksona0/i_couldnt_pay_my_bill_also_my_account_is_still/'>r/aws/comments/ksona0/i_couldnt_pay_my_bill_also_my_account_is_still/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kya5hp/service_orchestration_flow_using_aws_step/'>r/aws/comments/kya5hp/service_orchestration_flow_using_aws_step/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l36q3t/confused_by_concept/'>r/aws/comments/l36q3t/confused_by_concept/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksegsz/can_somebody_eli5_how_to_setup_mfa_in_the_cli/'>r/aws/comments/ksegsz/can_somebody_eli5_how_to_setup_mfa_in_the_cli/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/'>r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7h26u/question_is_there_a_way_to_view_member_account/'>r/aws/comments/l7h26u/question_is_there_a_way_to_view_member_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwcgh1/possible_solutions_to_debug_cloud_resources_on_aws/'>r/aws/comments/kwcgh1/possible_solutions_to_debug_cloud_resources_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/'>r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvpwsn/amazon_ec2_api_now_supports_internet_protocol/'>r/aws/comments/kvpwsn/amazon_ec2_api_now_supports_internet_protocol/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0tzgx/questions_related_to_free_tier/'>r/aws/comments/l0tzgx/questions_related_to_free_tier/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks59bn/how_long_does_it_roughly_take_for_aurora/'>r/aws/comments/ks59bn/how_long_does_it_roughly_take_for_aurora/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr0vf6/lesser_known_techniques_for_attacking_aws/'>r/aws/comments/kr0vf6/lesser_known_techniques_for_attacking_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2ksa/multiple_lambdas_same_filename_overwrite_possible/'>r/aws/comments/kq2ksa/multiple_lambdas_same_filename_overwrite_possible/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwiruc/consolidate_cost_management_of_multiple_aws/'>r/aws/comments/kwiruc/consolidate_cost_management_of_multiple_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0qdkj/what_exactly_is_free_and_what_is_payd_in_this/'>r/aws/comments/l0qdkj/what_exactly_is_free_and_what_is_payd_in_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz79gj/hosting_database_on_ec2/'>r/aws/comments/kz79gj/hosting_database_on_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/iri6ra/downsides_of_web_servers_in_public_subnet_over/'>r/aws/comments/iri6ra/downsides_of_web_servers_in_public_subnet_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3s75r/how_to_administer_serverless_microservices/'>r/aws/comments/l3s75r/how_to_administer_serverless_microservices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksg01z/aws_has_terrible_customer_service/'>r/aws/comments/ksg01z/aws_has_terrible_customer_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kstuge/iam_policy_for_s3_bucket_to_allow_access_to_all/'>r/aws/comments/kstuge/iam_policy_for_s3_bucket_to_allow_access_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/'>r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l32bfe/aws_devops_pro_prereqs/'>r/aws/comments/l32bfe/aws_devops_pro_prereqs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/'>r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3n6lb/best_aws_white_papers/'>r/aws/comments/l3n6lb/best_aws_white_papers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1pws3/tagging_in_boto3/'>r/aws/comments/l1pws3/tagging_in_boto3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/'>r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jxhrln/kinesis_down/'>r/aws/comments/jxhrln/kinesis_down/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6dx38/aws_amplify_question/'>r/aws/comments/l6dx38/aws_amplify_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/'>r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jnwxgn/ec2_auto_scaling_group_spot_supplimentation_with/'>r/aws/comments/jnwxgn/ec2_auto_scaling_group_spot_supplimentation_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l68vym/moving_sagemaker_notebook_instance_from_one/'>r/aws/comments/l68vym/moving_sagemaker_notebook_instance_from_one/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktfv06/how_to_best_provide_metrics_from_ecs_application/'>r/aws/comments/ktfv06/how_to_best_provide_metrics_from_ecs_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/'>r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l17l1e/methods_for_having_a_standard_bash_terminal_in/'>r/aws/comments/l17l1e/methods_for_having_a_standard_bash_terminal_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/'>r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/'>r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlevw/amazon_is_hosting_parler/'>r/aws/comments/ktlevw/amazon_is_hosting_parler/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/'>r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8xb7w/help_with_sending_emails_from_aws/'>r/aws/comments/l8xb7w/help_with_sending_emails_from_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/'>r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/'>r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/'>r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kul06m/your_account_has_exceeded_85_of_the_usage_limit/'>r/aws/comments/kul06m/your_account_has_exceeded_85_of_the_usage_limit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lrx1/can_you_help_me/'>r/aws/comments/l1lrx1/can_you_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kswutd/what_is_the_best_approach_to_use_aws_in_my_case/'>r/aws/comments/kswutd/what_is_the_best_approach_to_use_aws_in_my_case/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/'>r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9akpz/better_alternatives_to_ec2/'>r/aws/comments/l9akpz/better_alternatives_to_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knoz9w/what_services_do_i_need/'>r/aws/comments/knoz9w/what_services_do_i_need/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4lo90/where_to_start_on_serverless/'>r/aws/comments/l4lo90/where_to_start_on_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuw2iw/using_other_ports_on_beanstalk/'>r/aws/comments/kuw2iw/using_other_ports_on_beanstalk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/'>r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/'>r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzy9ff/getting_an_access_denied_error_when_trying_to/'>r/aws/comments/kzy9ff/getting_an_access_denied_error_when_trying_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/'>r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krr6xa/module_object_not_callable_error_when_using_boto3/'>r/aws/comments/krr6xa/module_object_not_callable_error_when_using_boto3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqz87/auth_service_for_mobile_application/'>r/aws/comments/kzqz87/auth_service_for_mobile_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwdk5d/what_aws_services_do_i_need_for_the_following/'>r/aws/comments/kwdk5d/what_aws_services_do_i_need_for_the_following/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1qxf5/aws_sdk_for_go_version_2_general_availability/'>r/aws/comments/l1qxf5/aws_sdk_for_go_version_2_general_availability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/'>r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0e0ws/session_manager_in_amazon_web_services_aws/'>r/aws/comments/l0e0ws/session_manager_in_amazon_web_services_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l16gp5/senior_aws_left_the_company_so_me_as_a_junior_had/'>r/aws/comments/l16gp5/senior_aws_left_the_company_so_me_as_a_junior_had/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1a3o3/aws_account_id_in_sns_topic_event/'>r/aws/comments/l1a3o3/aws_account_id_in_sns_topic_event/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvi27w/internet_gateway_bandwidth_reporting/'>r/aws/comments/kvi27w/internet_gateway_bandwidth_reporting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kui0yn/connection_to_amazon_rds_works_fine_in_the/'>r/aws/comments/kui0yn/connection_to_amazon_rds_works_fine_in_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/'>r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/'>r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6zjjc/cost_savings_solution/'>r/aws/comments/l6zjjc/cost_savings_solution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3eb4y/the_most_underappreciated_aws_service/'>r/aws/comments/l3eb4y/the_most_underappreciated_aws_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz5hxs/public_or_invite_only_aws_chat_is_there_any_place/'>r/aws/comments/kz5hxs/public_or_invite_only_aws_chat_is_there_any_place/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/iqs5f8/setting_up_dms_between_two_separate_aws_accounts/'>r/aws/comments/iqs5f8/setting_up_dms_between_two_separate_aws_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwv4v8/periodic_emails_from_aws_about_dkim_setup_going/'>r/aws/comments/kwv4v8/periodic_emails_from_aws_about_dkim_setup_going/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kn1xf2/aws_console_navigator_chrome_extension/'>r/aws/comments/kn1xf2/aws_console_navigator_chrome_extension/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/'>r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7elmc/aws_resource_inventory_database_for_organizations/'>r/aws/comments/l7elmc/aws_resource_inventory_database_for_organizations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qh5d/kafka_connect_with_elasticsearch_in_aws/'>r/aws/comments/l2qh5d/kafka_connect_with_elasticsearch_in_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kucqmw/translate_aws_names_to_their_real_world_names/'>r/aws/comments/kucqmw/translate_aws_names_to_their_real_world_names/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l33oop/set_up_named_shadow_with_aws_c_sdk/'>r/aws/comments/l33oop/set_up_named_shadow_with_aws_c_sdk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz8hzj/the_aws_resources_tab_in_cloud9_is_not_showing/'>r/aws/comments/kz8hzj/the_aws_resources_tab_in_cloud9_is_not_showing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2pqvt/how_to_execute_an_aws_cli_command_present_in_a/'>r/aws/comments/l2pqvt/how_to_execute_an_aws_cli_command_present_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/'>r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/'>r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l18jtn/need_help_run_aws_cli_commands_in_jenkins_build/'>r/aws/comments/l18jtn/need_help_run_aws_cli_commands_in_jenkins_build/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krta6i/aws_cs50_ide_password/'>r/aws/comments/krta6i/aws_cs50_ide_password/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/'>r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw486s/network_settings_dns_on_domain_controller/'>r/aws/comments/kw486s/network_settings_dns_on_domain_controller/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztosg/best_way_to_install_pandas_and_bumpy_to_aws_lanbda/'>r/aws/comments/kztosg/best_way_to_install_pandas_and_bumpy_to_aws_lanbda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqww18/what_are_some_easy_to_learn_aws_services/'>r/aws/comments/kqww18/what_are_some_easy_to_learn_aws_services/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knwnn7/ami_stability/'>r/aws/comments/knwnn7/ami_stability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuisn3/aws_work_from_anywhere_positions_us_citizens/'>r/aws/comments/kuisn3/aws_work_from_anywhere_positions_us_citizens/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/'>r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/'>r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l03kqs/how_do_you_monitor_api_metricsresponse_time_5xx_4/'>r/aws/comments/l03kqs/how_do_you_monitor_api_metricsresponse_time_5xx_4/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1wacx/two_installations_two_instances_of_sql_server_on/'>r/aws/comments/l1wacx/two_installations_two_instances_of_sql_server_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksgq46/import_connect_recordings_into_salesforce/'>r/aws/comments/ksgq46/import_connect_recordings_into_salesforce/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwpju/pre_signed_urls/'>r/aws/comments/kwwpju/pre_signed_urls/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktrclm/best_options_to_search_large_amounts_of_data/'>r/aws/comments/ktrclm/best_options_to_search_large_amounts_of_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyrhl1/blocked_my_cors_policy/'>r/aws/comments/kyrhl1/blocked_my_cors_policy/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqihiz/502_error_due_to_the_wrong_zone_how_to_connect/'>r/aws/comments/kqihiz/502_error_due_to_the_wrong_zone_how_to_connect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6s8jh/query_aws_with_sql_ft_steampipe/'>r/aws/comments/l6s8jh/query_aws_with_sql_ft_steampipe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6f7ux/aws_student_program_csa_probation/'>r/aws/comments/l6f7ux/aws_student_program_csa_probation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo73u/aws_lightsail_container_services_custom_domain/'>r/aws/comments/kpo73u/aws_lightsail_container_services_custom_domain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l67nsz/is_lightsail_bandwidth_limit_for_both_download/'>r/aws/comments/l67nsz/is_lightsail_bandwidth_limit_for_both_download/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqd7w6/ec2_or_workspaces/'>r/aws/comments/kqd7w6/ec2_or_workspaces/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kue2rn/securing_aws_api_credentials_and_access_to_aws_api/'>r/aws/comments/kue2rn/securing_aws_api_credentials_and_access_to_aws_api/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxtaki/have_a_cloud_data_warehouse_now_what/'>r/aws/comments/kxtaki/have_a_cloud_data_warehouse_now_what/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1eryd/immediate_impact_of_s3_encryption/'>r/aws/comments/l1eryd/immediate_impact_of_s3_encryption/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/'>r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2los2/bandwidth_limits_for_free_tier/'>r/aws/comments/l2los2/bandwidth_limits_for_free_tier/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktnf2x/why_is_it_called_aws_dogfish_routing/'>r/aws/comments/ktnf2x/why_is_it_called_aws_dogfish_routing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4cjs2/how_to_assign_credits_to_other_users_in_aws/'>r/aws/comments/l4cjs2/how_to_assign_credits_to_other_users_in_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/'>r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/</a></p>
</div>
<div label="s3, 286" sentiment={0.08458997441951983}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/'>r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/'>r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/'>r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/'>r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqwi9o/create_generic_client_builder_with_aws_java_sdk/'>r/aws/comments/kqwi9o/create_generic_client_builder_with_aws_java_sdk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/'>r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/'>r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/'>r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2qge/question_about_aws_amplify/'>r/aws/comments/kq2qge/question_about_aws_amplify/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/'>r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/'>r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvozye/aws_glue_streaming_etl_from_kafka/'>r/aws/comments/kvozye/aws_glue_streaming_etl_from_kafka/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kod2dp/rotating_passwords/'>r/aws/comments/kod2dp/rotating_passwords/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/'>r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/'>r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp8530/serverless_deployment/'>r/aws/comments/kp8530/serverless_deployment/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fkn1/listcopysynccompare_s3_buckets_5x50x_faster_than/'>r/aws/comments/l3fkn1/listcopysynccompare_s3_buckets_5x50x_faster_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l68vym/moving_sagemaker_notebook_instance_from_one/'>r/aws/comments/l68vym/moving_sagemaker_notebook_instance_from_one/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krutox/how_to_create_cloudwatch_alarm_to_monitor_s3_push/'>r/aws/comments/krutox/how_to_create_cloudwatch_alarm_to_monitor_s3_push/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kipjc4/how_do_you_tag_shared_resources/'>r/aws/comments/kipjc4/how_do_you_tag_shared_resources/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5d00u/get_started_with_aws_s3/'>r/aws/comments/l5d00u/get_started_with_aws_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krcuht/aws_hands_on_lab_how_to_recover_deleted_objects/'>r/aws/comments/krcuht/aws_hands_on_lab_how_to_recover_deleted_objects/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/'>r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksugyc/will_ses_queue_messages_if_my_mailserver_is_down/'>r/aws/comments/ksugyc/will_ses_queue_messages_if_my_mailserver_is_down/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/'>r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktm6xz/aws_athena_geoip_lookups_with_free_maxmind/'>r/aws/comments/ktm6xz/aws_athena_geoip_lookups_with_free_maxmind/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxmxjq/upload_image_to_private_s3_bucket/'>r/aws/comments/kxmxjq/upload_image_to_private_s3_bucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuftpl/applying_cloudwatch_config_through_userdata/'>r/aws/comments/kuftpl/applying_cloudwatch_config_through_userdata/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8ykxe/aws_s3_boto3_sync_question/'>r/aws/comments/l8ykxe/aws_s3_boto3_sync_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9akpz/better_alternatives_to_ec2/'>r/aws/comments/l9akpz/better_alternatives_to_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l57ksp/new_to_aws_help_creating_s3_alias_to_route_53/'>r/aws/comments/l57ksp/new_to_aws_help_creating_s3_alias_to_route_53/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/'>r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/'>r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7cp3d/s3fetch_simple_fast_multithreaded_s3_download_tool/'>r/aws/comments/l7cp3d/s3fetch_simple_fast_multithreaded_s3_download_tool/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l57b0j/transfer_data_from_ec2_to_s3/'>r/aws/comments/l57b0j/transfer_data_from_ec2_to_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kppqoq/what_would_be_the_cheapest_way_to_server_a_lot_of/'>r/aws/comments/kppqoq/what_would_be_the_cheapest_way_to_server_a_lot_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6umfm/can_i_get_list_of_s3_bucket_which_are_set_with/'>r/aws/comments/l6umfm/can_i_get_list_of_s3_bucket_which_are_set_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr1mjq/how_to_estimate_cost/'>r/aws/comments/kr1mjq/how_to_estimate_cost/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8iywv/android_how_to_securely_access_with_iam/'>r/aws/comments/l8iywv/android_how_to_securely_access_with_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq1e8j/deploying_with_s3_storage/'>r/aws/comments/kq1e8j/deploying_with_s3_storage/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/'>r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpcyzu/question_about_closing_account/'>r/aws/comments/kpcyzu/question_about_closing_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx8re9/what_aws_services_do_i_need_to_host_legacy_apps/'>r/aws/comments/kx8re9/what_aws_services_do_i_need_to_host_legacy_apps/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5gis4/expressjs_backend_and_react_native_frontend_s3/'>r/aws/comments/l5gis4/expressjs_backend_and_react_native_frontend_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6tl5t/is_there_a_way_to_serve_static_websites_hosted/'>r/aws/comments/l6tl5t/is_there_a_way_to_serve_static_websites_hosted/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/'>r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07npv/help_restrict_athena_workgroup_to_specific/'>r/aws/comments/l07npv/help_restrict_athena_workgroup_to_specific/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzb6cj/cloudformation_cloudwatch_synthetics_canary/'>r/aws/comments/kzb6cj/cloudformation_cloudwatch_synthetics_canary/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3qjnz/cloudfront_not_redirecting_http_to_https_despite/'>r/aws/comments/l3qjnz/cloudfront_not_redirecting_http_to_https_despite/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/'>r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/'>r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktnd3j/grabbing_data_from_s3_from_elastic_beanstalk/'>r/aws/comments/ktnd3j/grabbing_data_from_s3_from_elastic_beanstalk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l76bzu/suggestions_needed_on_how_to_store_data_in_an/'>r/aws/comments/l76bzu/suggestions_needed_on_how_to_store_data_in_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqn95q/s3_bucket_lockdow/'>r/aws/comments/kqn95q/s3_bucket_lockdow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/'>r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1faud/why_ec2_is_giving_me_private_key_it_wont_accept/'>r/aws/comments/l1faud/why_ec2_is_giving_me_private_key_it_wont_accept/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/'>r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6zjjc/cost_savings_solution/'>r/aws/comments/l6zjjc/cost_savings_solution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuyyzq/dynamodb_how_do_i_optimize_dynamodbs_cost_more/'>r/aws/comments/kuyyzq/dynamodb_how_do_i_optimize_dynamodbs_cost_more/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3eb4y/the_most_underappreciated_aws_service/'>r/aws/comments/l3eb4y/the_most_underappreciated_aws_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvistk/s3_static_website_configuration/'>r/aws/comments/kvistk/s3_static_website_configuration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbbj4/help_deleting_lots_of_s3_objects_and_their/'>r/aws/comments/kqbbj4/help_deleting_lots_of_s3_objects_and_their/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/'>r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0rvb8/g4dn_idle_costs/'>r/aws/comments/l0rvb8/g4dn_idle_costs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksu6l7/iam_policy_to_restrict_access_folders_in_s3/'>r/aws/comments/ksu6l7/iam_policy_to_restrict_access_folders_in_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/'>r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzpzs1/where_can_i_find_replication_logs_for_s3_buckets/'>r/aws/comments/kzpzs1/where_can_i_find_replication_logs_for_s3_buckets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6otow/newb_question_help_with_s3_static_website/'>r/aws/comments/l6otow/newb_question_help_with_s3_static_website/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4q6sw/redshift_query_latency_on_interactive_dashboard/'>r/aws/comments/l4q6sw/redshift_query_latency_on_interactive_dashboard/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvdz82/s3_with_an_ftplike_frontend/'>r/aws/comments/kvdz82/s3_with_an_ftplike_frontend/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvfec9/does_s3_work_for_this_requirement/'>r/aws/comments/kvfec9/does_s3_work_for_this_requirement/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kydzmi/high_level_explanation_of_api_gateway/'>r/aws/comments/kydzmi/high_level_explanation_of_api_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/'>r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzppu0/elasticache_on_aws_lambda/'>r/aws/comments/kzppu0/elasticache_on_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kybzlz/query_s3_bucket_from_athena_in_another_aws_account/'>r/aws/comments/kybzlz/query_s3_bucket_from_athena_in_another_aws_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l657t6/is_there_any_security_risk_for_making_your_s3/'>r/aws/comments/l657t6/is_there_any_security_risk_for_making_your_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/'>r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqjqsa/building_a_full_stack_app/'>r/aws/comments/kqjqsa/building_a_full_stack_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knw7m8/fun_free_services_with_aws/'>r/aws/comments/knw7m8/fun_free_services_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7ooak/using_dynamodb_as_cache/'>r/aws/comments/l7ooak/using_dynamodb_as_cache/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2izun/how_to_ensure_no_race_condition_occurred_for/'>r/aws/comments/l2izun/how_to_ensure_no_race_condition_occurred_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/'>r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qwd2/latency_comparison_for_lambda_storage_backend/'>r/aws/comments/l2qwd2/latency_comparison_for_lambda_storage_backend/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9k9xp/security_kpi_on_aws/'>r/aws/comments/l9k9xp/security_kpi_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/'>r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx9hw8/enriching_data_through_kinesis_data_analytics/'>r/aws/comments/kx9hw8/enriching_data_through_kinesis_data_analytics/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3zl0i/routing_for_ec2_port_and_s3_static_website_for/'>r/aws/comments/l3zl0i/routing_for_ec2_port_and_s3_static_website_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/'>r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksxn62/what_am_i_missing_can_i_deploy_cdk_via_bitbucket/'>r/aws/comments/ksxn62/what_am_i_missing_can_i_deploy_cdk_via_bitbucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/'>r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/'>r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l65ua7/cheapest_basic_security_setup/'>r/aws/comments/l65ua7/cheapest_basic_security_setup/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzus60/using_s3_for_storing_and_distributing_files_for_a/'>r/aws/comments/kzus60/using_s3_for_storing_and_distributing_files_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/'>r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwiq25/is_it_possible_to_limit_size_of_files_uploaded_by/'>r/aws/comments/kwiq25/is_it_possible_to_limit_size_of_files_uploaded_by/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwpju/pre_signed_urls/'>r/aws/comments/kwwpju/pre_signed_urls/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krtvea/how_to_allow_unauthenticated_users_to_access/'>r/aws/comments/krtvea/how_to_allow_unauthenticated_users_to_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/'>r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5kai/s3_permissions_question/'>r/aws/comments/kv5kai/s3_permissions_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwtquj/costeffective_s3_for_subscription_data/'>r/aws/comments/kwtquj/costeffective_s3_for_subscription_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0szpb/s3_bucket_policy_error/'>r/aws/comments/l0szpb/s3_bucket_policy_error/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksv7gx/preferred_method_for_monitoring_s3_get_requests/'>r/aws/comments/ksv7gx/preferred_method_for_monitoring_s3_get_requests/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1eryd/immediate_impact_of_s3_encryption/'>r/aws/comments/l1eryd/immediate_impact_of_s3_encryption/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw9wpc/how_to_write_lambda_function_in_python_that_pulls/'>r/aws/comments/kw9wpc/how_to_write_lambda_function_in_python_that_pulls/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/'>r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzheeh/s3_aws_amplify_react_native_console_log_error/'>r/aws/comments/kzheeh/s3_aws_amplify_react_native_console_log_error/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2los2/bandwidth_limits_for_free_tier/'>r/aws/comments/l2los2/bandwidth_limits_for_free_tier/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt3udv/how_to_transfer_files_from_onpremise_nfs_to_s3/'>r/aws/comments/kt3udv/how_to_transfer_files_from_onpremise_nfs_to_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kstuge/iam_policy_for_s3_bucket_to_allow_access_to_all/'>r/aws/comments/kstuge/iam_policy_for_s3_bucket_to_allow_access_to_all/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/'>r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1nwmr/possible_to_change_object_name_in_upload_to_s3/'>r/aws/comments/l1nwmr/possible_to_change_object_name_in_upload_to_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2u8cv/log4net_s3_appender_is_it_efficient/'>r/aws/comments/l2u8cv/log4net_s3_appender_is_it_efficient/</a></p>
</div>
<div label="amazon, 204" sentiment={0.05874323887804279}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqazy3/speculation_amazon_will_put_the_graviton_chips_in/'>r/aws/comments/kqazy3/speculation_amazon_will_put_the_graviton_chips_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/'>r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvpwsn/amazon_ec2_api_now_supports_internet_protocol/'>r/aws/comments/kvpwsn/amazon_ec2_api_now_supports_internet_protocol/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/'>r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqoil2/quickstart_for_onboarding_tenants_and_users_in_a/'>r/aws/comments/kqoil2/quickstart_for_onboarding_tenants_and_users_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kurahw/account_stolen/'>r/aws/comments/kurahw/account_stolen/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b6i7/some_questions_about_ec2_pricing/'>r/aws/comments/l1b6i7/some_questions_about_ec2_pricing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq8dfg/container_scanning_tools/'>r/aws/comments/kq8dfg/container_scanning_tools/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/'>r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqdhbc/best_way_to_build_a_python_lambda_layer/'>r/aws/comments/kqdhbc/best_way_to_build_a_python_lambda_layer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/'>r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b76t/how_to_create_an_efk_logging_stack_on_amazon/'>r/aws/comments/l1b76t/how_to_create_an_efk_logging_stack_on_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/'>r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/'>r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktqsuy/parler_runs_on_aws/'>r/aws/comments/ktqsuy/parler_runs_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kykars/when_terminating_a_spot_instance_do_i_have_to/'>r/aws/comments/kykars/when_terminating_a_spot_instance_do_i_have_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks46q6/why_isnt_the_amazon_linux_distro_called_bezos/'>r/aws/comments/ks46q6/why_isnt_the_amazon_linux_distro_called_bezos/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/'>r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxs9zi/nodejs_app_doesnt_run_on_https_protocol_but_work/'>r/aws/comments/kxs9zi/nodejs_app_doesnt_run_on_https_protocol_but_work/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksflxw/amazon_cant_use_its_logo_in_china_and_need_to_pay/'>r/aws/comments/ksflxw/amazon_cant_use_its_logo_in_china_and_need_to_pay/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/'>r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7rfhw/how_to_prepare_for_aws_interview/'>r/aws/comments/l7rfhw/how_to_prepare_for_aws_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7yqbd/where_does_sagemaker_get_its_name_from/'>r/aws/comments/l7yqbd/where_does_sagemaker_get_its_name_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5ydlo/help_needed_for_amazon_interview/'>r/aws/comments/l5ydlo/help_needed_for_amazon_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/'>r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksgcyz/aws_iot_lorawan_services_question_is_are_gateways/'>r/aws/comments/ksgcyz/aws_iot_lorawan_services_question_is_are_gateways/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/'>r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3hyl9/design_question_using_dynamodb/'>r/aws/comments/l3hyl9/design_question_using_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx6q2y/how_to_run_aws_cis_checks_with_cloudquery/'>r/aws/comments/kx6q2y/how_to_run_aws_cis_checks_with_cloudquery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8clgs/do_you_still_have_traditional_servercolo_setups/'>r/aws/comments/l8clgs/do_you_still_have_traditional_servercolo_setups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqsx1z/up_to_date_resources_for_setting_up_moodle_on/'>r/aws/comments/kqsx1z/up_to_date_resources_for_setting_up_moodle_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/'>r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2cuok/amazon_lex_introduces_an_enhanced_console/'>r/aws/comments/l2cuok/amazon_lex_introduces_an_enhanced_console/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/konojg/using_terraform_013_with_aws_wildcard_certificates/'>r/aws/comments/konojg/using_terraform_013_with_aws_wildcard_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqvvsb/integrating_okta_as_a_saml_identity_provider_in/'>r/aws/comments/kqvvsb/integrating_okta_as_a_saml_identity_provider_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l627im/just_launched_my_first_ec2_instance_and_i_am/'>r/aws/comments/l627im/just_launched_my_first_ec2_instance_and_i_am/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jsgn9x/realworld_aws_timestream_ingest_performance/'>r/aws/comments/jsgn9x/realworld_aws_timestream_ingest_performance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3950j/who_to_complain_to_about_spam_if_aws_trust_safety/'>r/aws/comments/l3950j/who_to_complain_to_about_spam_if_aws_trust_safety/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz4nd4/tips_in_automated_switching_from_unlimited_mode/'>r/aws/comments/kz4nd4/tips_in_automated_switching_from_unlimited_mode/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6dsj2/amazon_managed_grafana_service_what_it_is_how_to/'>r/aws/comments/l6dsj2/amazon_managed_grafana_service_what_it_is_how_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kntdcq/how_to_create_robinhood_using_dynamodb/'>r/aws/comments/kntdcq/how_to_create_robinhood_using_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8iywv/android_how_to_securely_access_with_iam/'>r/aws/comments/l8iywv/android_how_to_securely_access_with_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw0zk7/serverless_user_authentication/'>r/aws/comments/kw0zk7/serverless_user_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/'>r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/'>r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uhzl/do_aws_credits_accumulate_or_i_can_only_use/'>r/aws/comments/l7uhzl/do_aws_credits_accumulate_or_i_can_only_use/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4ush/from_this_guide_any_tips_for_ubuntu_aws_hardening/'>r/aws/comments/ko4ush/from_this_guide_any_tips_for_ubuntu_aws_hardening/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlevw/amazon_is_hosting_parler/'>r/aws/comments/ktlevw/amazon_is_hosting_parler/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l63axw/ec2_and_amis/'>r/aws/comments/l63axw/ec2_and_amis/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6feqn/security_group_question/'>r/aws/comments/l6feqn/security_group_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/'>r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/'>r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/'>r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l16gp5/senior_aws_left_the_company_so_me_as_a_junior_had/'>r/aws/comments/l16gp5/senior_aws_left_the_company_so_me_as_a_junior_had/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptvux/need_help_with_amplify_cognito_angular_and_net/'>r/aws/comments/kptvux/need_help_with_amplify_cognito_angular_and_net/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/i5wgz5/dynamodb_atomic_counter/'>r/aws/comments/i5wgz5/dynamodb_atomic_counter/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq8xq5/the_most_popular_databases_20062020_statistics/'>r/aws/comments/kq8xq5/the_most_popular_databases_20062020_statistics/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knwnn7/ami_stability/'>r/aws/comments/knwnn7/ami_stability/</a></p>
</div>
<div label="vpc, 173" sentiment={0.07395953757225436}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvw5p7/accessing_aws_ec2_via_ssh_without_exposing_the_ssh/'>r/aws/comments/kvw5p7/accessing_aws_ec2_via_ssh_without_exposing_the_ssh/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzjyko/general_knowledge_aws_newbie/'>r/aws/comments/kzjyko/general_knowledge_aws_newbie/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvpwsn/amazon_ec2_api_now_supports_internet_protocol/'>r/aws/comments/kvpwsn/amazon_ec2_api_now_supports_internet_protocol/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kue382/very_low_bandwith_from_aws_vpc_to_internet/'>r/aws/comments/kue382/very_low_bandwith_from_aws_vpc_to_internet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/'>r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyzb6b/connecting_to_microservice_api_from_api_gateway/'>r/aws/comments/kyzb6b/connecting_to_microservice_api_from_api_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qwd2/latency_comparison_for_lambda_storage_backend/'>r/aws/comments/l2qwd2/latency_comparison_for_lambda_storage_backend/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvi27w/internet_gateway_bandwidth_reporting/'>r/aws/comments/kvi27w/internet_gateway_bandwidth_reporting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2ugb/route_53_internal_endpoint_not_resolving/'>r/aws/comments/kq2ugb/route_53_internal_endpoint_not_resolving/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kui0yn/connection_to_amazon_rds_works_fine_in_the/'>r/aws/comments/kui0yn/connection_to_amazon_rds_works_fine_in_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/'>r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt3qlc/lambda_to_ec2_endpoint_issue/'>r/aws/comments/kt3qlc/lambda_to_ec2_endpoint_issue/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv00i2/accessing_resource_of_different_private_vpc_using/'>r/aws/comments/kv00i2/accessing_resource_of_different_private_vpc_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knoz9w/what_services_do_i_need/'>r/aws/comments/knoz9w/what_services_do_i_need/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksxn62/what_am_i_missing_can_i_deploy_cdk_via_bitbucket/'>r/aws/comments/ksxn62/what_am_i_missing_can_i_deploy_cdk_via_bitbucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/'>r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4lo90/where_to_start_on_serverless/'>r/aws/comments/l4lo90/where_to_start_on_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksdpbo/aws_cloudformation_template_for_cloudera_cluster/'>r/aws/comments/ksdpbo/aws_cloudformation_template_for_cloudera_cluster/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/'>r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/'>r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/'>r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/'>r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/'>r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6dx38/aws_amplify_question/'>r/aws/comments/l6dx38/aws_amplify_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvqqtz/access_documentdb_without_ssh_tunneling/'>r/aws/comments/kvqqtz/access_documentdb_without_ssh_tunneling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/'>r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/'>r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7elmc/aws_resource_inventory_database_for_organizations/'>r/aws/comments/l7elmc/aws_resource_inventory_database_for_organizations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/'>r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1kqa2/k8s_alb_ingress_controller/'>r/aws/comments/l1kqa2/k8s_alb_ingress_controller/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzw2e5/email_server_with_aws_lambda/'>r/aws/comments/kzw2e5/email_server_with_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/'>r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l67zvg/the_easiest_way_to_change_vpc_of_an_existing/'>r/aws/comments/l67zvg/the_easiest_way_to_change_vpc_of_an_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/'>r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqterp/lambda_a_invoking_lambda_b_no_lambda_b_logs/'>r/aws/comments/kqterp/lambda_a_invoking_lambda_b_no_lambda_b_logs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr8m4x/only_allow_inbound_traffic_from_ec2/'>r/aws/comments/kr8m4x/only_allow_inbound_traffic_from_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l17l1e/methods_for_having_a_standard_bash_terminal_in/'>r/aws/comments/l17l1e/methods_for_having_a_standard_bash_terminal_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/'>r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw45vw/how_to_connect_to_documentdb_using_lambda_with/'>r/aws/comments/kw45vw/how_to_connect_to_documentdb_using_lambda_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksnggf/i_cant_deploy_a_cloud9_environment_because_i_keep/'>r/aws/comments/ksnggf/i_cant_deploy_a_cloud9_environment_because_i_keep/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvscph/ssl_certificates/'>r/aws/comments/kvscph/ssl_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/'>r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/'>r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/'>r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqw03g/transit_gateway_over_virtual_private_gateway/'>r/aws/comments/kqw03g/transit_gateway_over_virtual_private_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzppu0/elasticache_on_aws_lambda/'>r/aws/comments/kzppu0/elasticache_on_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1yrbw/rds_connection_consistently_timing_out_for_no/'>r/aws/comments/l1yrbw/rds_connection_consistently_timing_out_for_no/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l63axw/ec2_and_amis/'>r/aws/comments/l63axw/ec2_and_amis/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/'>r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/'>r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko868r/lambda_http_with_rds_postgres_safest_practices/'>r/aws/comments/ko868r/lambda_http_with_rds_postgres_safest_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks124o/api_gateway_http_api_and_websockets/'>r/aws/comments/ks124o/api_gateway_http_api_and_websockets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/'>r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo2cx/access_from_s3_frontend_to_backend_in_a_private/'>r/aws/comments/kpo2cx/access_from_s3_frontend_to_backend_in_a_private/</a></p>
</div>
<div label="cloudformation, 154" sentiment={0.11376248961476229}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxl8pg/serverless_ide_enhanced_support_for_aws_sam_and/'>r/aws/comments/kxl8pg/serverless_ide_enhanced_support_for_aws_sam_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujxws/resources_for_setting_up_a_new_aws_account_with/'>r/aws/comments/kujxws/resources_for_setting_up_a_new_aws_account_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/'>r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krrdo9/a_cloud_engineers_experience_on_best_practices/'>r/aws/comments/krrdo9/a_cloud_engineers_experience_on_best_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks2l9q/how_should_rest_apis_communicate_in_a_serverless/'>r/aws/comments/ks2l9q/how_should_rest_apis_communicate_in_a_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/'>r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/'>r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/'>r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0hsan/ecs_instance_type/'>r/aws/comments/l0hsan/ecs_instance_type/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7gp3/beginner_training_for_cloudformation/'>r/aws/comments/ky7gp3/beginner_training_for_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kymp2v/default_security_group_in_ami_launch/'>r/aws/comments/kymp2v/default_security_group_in_ami_launch/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0gwin/here_is_an_article_about_a_open_source_toollint/'>r/aws/comments/l0gwin/here_is_an_article_about_a_open_source_toollint/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/'>r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/'>r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/'>r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kui3uk/cloudwatch_s3_alarm_based_on_weekly_bucket_size/'>r/aws/comments/kui3uk/cloudwatch_s3_alarm_based_on_weekly_bucket_size/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2qge/question_about_aws_amplify/'>r/aws/comments/kq2qge/question_about_aws_amplify/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/'>r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4jare/codepipeline_deploy_to_multiple_cloudformation/'>r/aws/comments/l4jare/codepipeline_deploy_to_multiple_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv3s03/dinamycally_create_new_pipelines_in_codepipeline/'>r/aws/comments/kv3s03/dinamycally_create_new_pipelines_in_codepipeline/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/'>r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqihiz/502_error_due_to_the_wrong_zone_how_to_connect/'>r/aws/comments/kqihiz/502_error_due_to_the_wrong_zone_how_to_connect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/'>r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knx4eb/aws_gateway_lambda_provisioned_concurrency/'>r/aws/comments/knx4eb/aws_gateway_lambda_provisioned_concurrency/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlm4c/volume_volume_attachment_to_make_ebs_ready_for/'>r/aws/comments/ktlm4c/volume_volume_attachment_to_make_ebs_ready_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kze8np/looking_for_ways_to_speed_up_deployments_with/'>r/aws/comments/kze8np/looking_for_ways_to_speed_up_deployments_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/'>r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxi1jf/rollback_secuirty_group_to_previous_state/'>r/aws/comments/kxi1jf/rollback_secuirty_group_to_previous_state/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/'>r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/'>r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07138/starting_multiple_instances_best_practices/'>r/aws/comments/l07138/starting_multiple_instances_best_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/'>r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0lyrj/week_of_january_18th_what_are_you_favorite_aws/'>r/aws/comments/l0lyrj/week_of_january_18th_what_are_you_favorite_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxnxmd/the_secret_power_of_cloudformation/'>r/aws/comments/kxnxmd/the_secret_power_of_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvvhy/implementing_albs_with_eks/'>r/aws/comments/kvvvhy/implementing_albs_with_eks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp0ufe/restoring_instance_snapshot_of_cloudformation/'>r/aws/comments/kp0ufe/restoring_instance_snapshot_of_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3ctig/has_anyone_been_able_to_throttle_apigatewayv2/'>r/aws/comments/l3ctig/has_anyone_been_able_to_throttle_apigatewayv2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/'>r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxxajr/aws_sandbox_accounts_for_users_like_in_linux/'>r/aws/comments/kxxajr/aws_sandbox_accounts_for_users_like_in_linux/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1yrbw/rds_connection_consistently_timing_out_for_no/'>r/aws/comments/l1yrbw/rds_connection_consistently_timing_out_for_no/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/'>r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8c8ws/lambda_build_deployment_with_sam/'>r/aws/comments/l8c8ws/lambda_build_deployment_with_sam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2hnk3/cloudformation_drift_results_not_updating_or/'>r/aws/comments/l2hnk3/cloudformation_drift_results_not_updating_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/'>r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kouv6s/help_with_thesis_please_control_tower_automation/'>r/aws/comments/kouv6s/help_with_thesis_please_control_tower_automation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuftpl/applying_cloudwatch_config_through_userdata/'>r/aws/comments/kuftpl/applying_cloudwatch_config_through_userdata/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/'>r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpqfxo/monthly_budgets_using_custom_start_date/'>r/aws/comments/kpqfxo/monthly_budgets_using_custom_start_date/</a></p>
</div>
<div label="ip, 130" sentiment={0.06997209272209269}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b6i7/some_questions_about_ec2_pricing/'>r/aws/comments/l1b6i7/some_questions_about_ec2_pricing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lrx1/can_you_help_me/'>r/aws/comments/l1lrx1/can_you_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/'>r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/'>r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krxui8/ec2_instance_stopped_working/'>r/aws/comments/krxui8/ec2_instance_stopped_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko1xin/private_eip_for_kubernetes_service/'>r/aws/comments/ko1xin/private_eip_for_kubernetes_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2ugb/route_53_internal_endpoint_not_resolving/'>r/aws/comments/kq2ugb/route_53_internal_endpoint_not_resolving/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0kwx9/network_acls_vs_security_groups/'>r/aws/comments/l0kwx9/network_acls_vs_security_groups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/'>r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktm6xz/aws_athena_geoip_lookups_with_free_maxmind/'>r/aws/comments/ktm6xz/aws_athena_geoip_lookups_with_free_maxmind/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqn95q/s3_bucket_lockdow/'>r/aws/comments/kqn95q/s3_bucket_lockdow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/'>r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/'>r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/'>r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/'>r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/'>r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l57ksp/new_to_aws_help_creating_s3_alias_to_route_53/'>r/aws/comments/l57ksp/new_to_aws_help_creating_s3_alias_to_route_53/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz6gvy/after_stopping_and_starting_my_ec2_instance_my_ip/'>r/aws/comments/kz6gvy/after_stopping_and_starting_my_ec2_instance_my_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6dx38/aws_amplify_question/'>r/aws/comments/l6dx38/aws_amplify_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1dan8/update_instance_type_in_cloudformation/'>r/aws/comments/l1dan8/update_instance_type_in_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/'>r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5kai/s3_permissions_question/'>r/aws/comments/kv5kai/s3_permissions_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1kqa2/k8s_alb_ingress_controller/'>r/aws/comments/l1kqa2/k8s_alb_ingress_controller/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/'>r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kokbj0/load_balancer_503_service_temporarily_unavailable/'>r/aws/comments/kokbj0/load_balancer_503_service_temporarily_unavailable/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzw2e5/email_server_with_aws_lambda/'>r/aws/comments/kzw2e5/email_server_with_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krfjzr/how_do_i_open_a_tcp_port_for_my_ec2_instance/'>r/aws/comments/krfjzr/how_do_i_open_a_tcp_port_for_my_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv54t2/transferring_elastic_ip_between_aws_accounts/'>r/aws/comments/kv54t2/transferring_elastic_ip_between_aws_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/'>r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx72as/pem_file_doesnt_work_on_new_laptop/'>r/aws/comments/kx72as/pem_file_doesnt_work_on_new_laptop/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/'>r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/'>r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l67nsz/is_lightsail_bandwidth_limit_for_both_download/'>r/aws/comments/l67nsz/is_lightsail_bandwidth_limit_for_both_download/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfhcw/authorise_inbound_rules_to_my_instance_ssh_ip/'>r/aws/comments/kyfhcw/authorise_inbound_rules_to_my_instance_ssh_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/iri6ra/downsides_of_web_servers_in_public_subnet_over/'>r/aws/comments/iri6ra/downsides_of_web_servers_in_public_subnet_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knouqh/question_about_lambda_functions_and_ips/'>r/aws/comments/knouqh/question_about_lambda_functions_and_ips/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komuci/how_to_create_target_in_aws_with_dynamic_ip/'>r/aws/comments/komuci/how_to_create_target_in_aws_with_dynamic_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/'>r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krv731/connect_to_documentdb_outside_of_vpc/'>r/aws/comments/krv731/connect_to_documentdb_outside_of_vpc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/'>r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/'>r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/'>r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx432g/ses_iam_user_logging/'>r/aws/comments/kx432g/ses_iam_user_logging/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l51of0/connecting_ec2_instance_with_private_ip_without/'>r/aws/comments/l51of0/connecting_ec2_instance_with_private_ip_without/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6feqn/security_group_question/'>r/aws/comments/l6feqn/security_group_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/'>r/aws/comments/ks45e1/how_long_could_i_reasonably_trust_amazon_web/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2n57b/how_long_does_it_take_for_new_vpc_network_acl/'>r/aws/comments/l2n57b/how_long_does_it_take_for_new_vpc_network_acl/</a></p>
</div>
<div label="cloudfront, 127" sentiment={0.08969154231387076}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzjyko/general_knowledge_aws_newbie/'>r/aws/comments/kzjyko/general_knowledge_aws_newbie/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6n8g5/can_adding_a_cloudfront_distribution_impact_the/'>r/aws/comments/l6n8g5/can_adding_a_cloudfront_distribution_impact_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lrx1/can_you_help_me/'>r/aws/comments/l1lrx1/can_you_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxecuc/requesting_help_configuring_route53_hosted_zones/'>r/aws/comments/kxecuc/requesting_help_configuring_route53_hosted_zones/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/'>r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/'>r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2wd5s/make_clients_use_specific_location_of_cloudfront/'>r/aws/comments/l2wd5s/make_clients_use_specific_location_of_cloudfront/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3qjnz/cloudfront_not_redirecting_http_to_https_despite/'>r/aws/comments/l3qjnz/cloudfront_not_redirecting_http_to_https_despite/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/'>r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2bkly/im_expecting_5000_simultaneous_active_users_this/'>r/aws/comments/l2bkly/im_expecting_5000_simultaneous_active_users_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l51sff/cloudfront_s3_trying_to_get_versions_resulting_in/'>r/aws/comments/l51sff/cloudfront_s3_trying_to_get_versions_resulting_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/'>r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/'>r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kstr26/serve_multiple_tenants_with_dedicated_subdomains/'>r/aws/comments/kstr26/serve_multiple_tenants_with_dedicated_subdomains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvx41i/tracking_usage_metrics_with_api_gateway_and/'>r/aws/comments/kvx41i/tracking_usage_metrics_with_api_gateway_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8v5td/newb_logging_question/'>r/aws/comments/l8v5td/newb_logging_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9akpz/better_alternatives_to_ec2/'>r/aws/comments/l9akpz/better_alternatives_to_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/'>r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/'>r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/'>r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8tlyo/html_file_in_prefix_folder_on_s3backed_static/'>r/aws/comments/l8tlyo/html_file_in_prefix_folder_on_s3backed_static/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/'>r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwiq25/is_it_possible_to_limit_size_of_files_uploaded_by/'>r/aws/comments/kwiq25/is_it_possible_to_limit_size_of_files_uploaded_by/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kunw45/what_would_cause_a_successfully_issued_acm/'>r/aws/comments/kunw45/what_would_cause_a_successfully_issued_acm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/'>r/aws/comments/l3ckry/uploading_object_to_s3_through_cloudfront_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt19pt/cloudfront_nginx_stream_option_encrypted/'>r/aws/comments/kt19pt/cloudfront_nginx_stream_option_encrypted/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6aoui/is_it_possible_to_create_a_cloudfront/'>r/aws/comments/l6aoui/is_it_possible_to_create_a_cloudfront/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koqs45/how_to_prevent_unexpected_billing_for_website/'>r/aws/comments/koqs45/how_to_prevent_unexpected_billing_for_website/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/'>r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/'>r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kppqoq/what_would_be_the_cheapest_way_to_server_a_lot_of/'>r/aws/comments/kppqoq/what_would_be_the_cheapest_way_to_server_a_lot_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxsl3h/cloudfront_for_third_party_origins/'>r/aws/comments/kxsl3h/cloudfront_for_third_party_origins/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kseiml/help_with_s3_bucket_redirecting/'>r/aws/comments/kseiml/help_with_s3_bucket_redirecting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6otow/newb_question_help_with_s3_static_website/'>r/aws/comments/l6otow/newb_question_help_with_s3_static_website/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/'>r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo73u/aws_lightsail_container_services_custom_domain/'>r/aws/comments/kpo73u/aws_lightsail_container_services_custom_domain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/'>r/aws/comments/kq6brl/can_someone_check_my_numbers_kinesis_video/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/'>r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2luiq/mean_stack_blog_aws_services/'>r/aws/comments/l2luiq/mean_stack_blog_aws_services/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6tl5t/is_there_a_way_to_serve_static_websites_hosted/'>r/aws/comments/l6tl5t/is_there_a_way_to_serve_static_websites_hosted/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqjqsa/building_a_full_stack_app/'>r/aws/comments/kqjqsa/building_a_full_stack_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/'>r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/'>r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwzm8g/aws_application_level_security_waf/'>r/aws/comments/kwzm8g/aws_application_level_security_waf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks124o/api_gateway_http_api_and_websockets/'>r/aws/comments/ks124o/api_gateway_http_api_and_websockets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1nwmr/possible_to_change_object_name_in_upload_to_s3/'>r/aws/comments/l1nwmr/possible_to_change_object_name_in_upload_to_s3/</a></p>
</div>
<div label="parler, 119" sentiment={0.07901175621763858}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku2s86/aws_is_the_host_for_parlercom_it_would_be_a_shame/'>r/aws/comments/ku2s86/aws_is_the_host_for_parlercom_it_would_be_a_shame/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlevw/amazon_is_hosting_parler/'>r/aws/comments/ktlevw/amazon_is_hosting_parler/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuqj0q/politics_aside_what_do_you_think_of_aws_blocking/'>r/aws/comments/kuqj0q/politics_aside_what_do_you_think_of_aws_blocking/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktqsuy/parler_runs_on_aws/'>r/aws/comments/ktqsuy/parler_runs_on_aws/</a></p>
</div>
<div label="rds, 99" sentiment={0.08130606813687621}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp3bcl/dbm6glarge_or_dbt3large_rds_instance/'>r/aws/comments/kp3bcl/dbm6glarge_or_dbt3large_rds_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs2kx/slow_local_queries/'>r/aws/comments/kzs2kx/slow_local_queries/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwvaoa/rds_postgresql_read_replica_out_of_date_query/'>r/aws/comments/kwvaoa/rds_postgresql_read_replica_out_of_date_query/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kui0yn/connection_to_amazon_rds_works_fine_in_the/'>r/aws/comments/kui0yn/connection_to_amazon_rds_works_fine_in_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/'>r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvm340/noob_question_how_does_read_replica_works/'>r/aws/comments/kvm340/noob_question_how_does_read_replica_works/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l24blw/die_or_retry_on_database_error/'>r/aws/comments/l24blw/die_or_retry_on_database_error/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/'>r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8v5td/newb_logging_question/'>r/aws/comments/l8v5td/newb_logging_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/'>r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvtreo/passing_userschema_á_la_mongoose_to_aurora_in_rds/'>r/aws/comments/kvtreo/passing_userschema_á_la_mongoose_to_aurora_in_rds/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4lo90/where_to_start_on_serverless/'>r/aws/comments/l4lo90/where_to_start_on_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/'>r/aws/comments/ksi9p1/how_do_i_talk_about_my_skills_with_aws_on_a_cv/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2vhhq/cant_figure_out_why_lightsail_instance_is_taking/'>r/aws/comments/l2vhhq/cant_figure_out_why_lightsail_instance_is_taking/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv150m/how_aws_is_creating_read_replicas_within_23/'>r/aws/comments/kv150m/how_aws_is_creating_read_replicas_within_23/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksm58u/on_prem_oracle_with_tde_enabled_to_aws_rds_oracle/'>r/aws/comments/ksm58u/on_prem_oracle_with_tde_enabled_to_aws_rds_oracle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/'>r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxe5ep/why_cant_i_create_the_rds_in_my_subnet_i_have_2/'>r/aws/comments/kxe5ep/why_cant_i_create_the_rds_in_my_subnet_i_have_2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2kve7/filtering_and_reporting_on_big_data_interactively/'>r/aws/comments/l2kve7/filtering_and_reporting_on_big_data_interactively/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l52t94/using_rds_to_host_a_db_and_cant_connect_via_mysql/'>r/aws/comments/l52t94/using_rds_to_host_a_db_and_cant_connect_via_mysql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksfvnc/awsgate_0100_released_with_support_for_connecting/'>r/aws/comments/ksfvnc/awsgate_0100_released_with_support_for_connecting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqi27b/new_to_awsdevops_development_artifactory_question/'>r/aws/comments/kqi27b/new_to_awsdevops_development_artifactory_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l95vpb/are_we_digging_our_own_grave/'>r/aws/comments/l95vpb/are_we_digging_our_own_grave/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/'>r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz79gj/hosting_database_on_ec2/'>r/aws/comments/kz79gj/hosting_database_on_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxi1jf/rollback_secuirty_group_to_previous_state/'>r/aws/comments/kxi1jf/rollback_secuirty_group_to_previous_state/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwi6dc/cant_connect_my_elastic_beanstalk_app_to_my_rds/'>r/aws/comments/kwi6dc/cant_connect_my_elastic_beanstalk_app_to_my_rds/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/'>r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8zx1g/aurora_now_supports_postgresql_12/'>r/aws/comments/l8zx1g/aurora_now_supports_postgresql_12/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8p02i/security_assessment_help/'>r/aws/comments/l8p02i/security_assessment_help/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/'>r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx8re9/what_aws_services_do_i_need_to_host_legacy_apps/'>r/aws/comments/kx8re9/what_aws_services_do_i_need_to_host_legacy_apps/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/'>r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/'>r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvdzr/database_migration_service_question/'>r/aws/comments/kvvdzr/database_migration_service_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1yrbw/rds_connection_consistently_timing_out_for_no/'>r/aws/comments/l1yrbw/rds_connection_consistently_timing_out_for_no/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5src5/does_increase_the_allocated_storage_add_cost_even/'>r/aws/comments/l5src5/does_increase_the_allocated_storage_add_cost_even/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko868r/lambda_http_with_rds_postgres_safest_practices/'>r/aws/comments/ko868r/lambda_http_with_rds_postgres_safest_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l16gp5/senior_aws_left_the_company_so_me_as_a_junior_had/'>r/aws/comments/l16gp5/senior_aws_left_the_company_so_me_as_a_junior_had/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/'>r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/'>r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/</a></p>
</div>
<div label="dns, 94" sentiment={0.03605041678179976}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lrx1/can_you_help_me/'>r/aws/comments/l1lrx1/can_you_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqcipx/route_http_to_https_for_a_react_app_deployed_on/'>r/aws/comments/kqcipx/route_http_to_https_for_a_react_app_deployed_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/'>r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kn1p0f/i_built_a_new_visualisation_tool_for_aws/'>r/aws/comments/kn1p0f/i_built_a_new_visualisation_tool_for_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko1xin/private_eip_for_kubernetes_service/'>r/aws/comments/ko1xin/private_eip_for_kubernetes_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2ugb/route_53_internal_endpoint_not_resolving/'>r/aws/comments/kq2ugb/route_53_internal_endpoint_not_resolving/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/'>r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt2792/no_matter_what_i_do_i_cannot_seem_to_get_cdk_to/'>r/aws/comments/kt2792/no_matter_what_i_do_i_cannot_seem_to_get_cdk_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/'>r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/'>r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/'>r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwv4v8/periodic_emails_from_aws_about_dkim_setup_going/'>r/aws/comments/kwv4v8/periodic_emails_from_aws_about_dkim_setup_going/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz6gvy/after_stopping_and_starting_my_ec2_instance_my_ip/'>r/aws/comments/kz6gvy/after_stopping_and_starting_my_ec2_instance_my_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/'>r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/'>r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/'>r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/'>r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo73u/aws_lightsail_container_services_custom_domain/'>r/aws/comments/kpo73u/aws_lightsail_container_services_custom_domain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0v6b9/cant_connect_to_an_aws_container_service_in/'>r/aws/comments/l0v6b9/cant_connect_to_an_aws_container_service_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komuci/how_to_create_target_in_aws_with_dynamic_ip/'>r/aws/comments/komuci/how_to_create_target_in_aws_with_dynamic_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/'>r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/'>r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw486s/network_settings_dns_on_domain_controller/'>r/aws/comments/kw486s/network_settings_dns_on_domain_controller/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/'>r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky5gv8/how_can_i_add_my_free_ssl_from_porkbun_to_my/'>r/aws/comments/ky5gv8/how_can_i_add_my_free_ssl_from_porkbun_to_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/'>r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/'>r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks124o/api_gateway_http_api_and_websockets/'>r/aws/comments/ks124o/api_gateway_http_api_and_websockets/</a></p>
</div>
<div label="ebs, 90" sentiment={0.020906786115119456}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp3uxl/cost_of_operation/'>r/aws/comments/kp3uxl/cost_of_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9k9xp/security_kpi_on_aws/'>r/aws/comments/l9k9xp/security_kpi_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/'>r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/'>r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqx8yf/query_about_where_a_charge_on_my_billing_is/'>r/aws/comments/kqx8yf/query_about_where_a_charge_on_my_billing_is/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks8ywp/understanding_maximum_and_baseline_iops_on/'>r/aws/comments/ks8ywp/understanding_maximum_and_baseline_iops_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx2aoz/nodejs_in_elastic_beanstalk/'>r/aws/comments/kx2aoz/nodejs_in_elastic_beanstalk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0tzgx/questions_related_to_free_tier/'>r/aws/comments/l0tzgx/questions_related_to_free_tier/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9o944/quick_aws_question/'>r/aws/comments/l9o944/quick_aws_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/'>r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knoz9w/what_services_do_i_need/'>r/aws/comments/knoz9w/what_services_do_i_need/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv150m/how_aws_is_creating_read_replicas_within_23/'>r/aws/comments/kv150m/how_aws_is_creating_read_replicas_within_23/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8029l/copy_snapshots_are_full_backup_or_incremental/'>r/aws/comments/l8029l/copy_snapshots_are_full_backup_or_incremental/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/'>r/aws/comments/l6kcnq/aws_instances_down_for_minutes_at_a_time_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kumttb/is_ebs_for_aws_the_same_thing_as_disks_for_azure/'>r/aws/comments/kumttb/is_ebs_for_aws_the_same_thing_as_disks_for_azure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/'>r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0rvb8/g4dn_idle_costs/'>r/aws/comments/l0rvb8/g4dn_idle_costs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/'>r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/'>r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlm4c/volume_volume_attachment_to_make_ebs_ready_for/'>r/aws/comments/ktlm4c/volume_volume_attachment_to_make_ebs_ready_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz79gj/hosting_database_on_ec2/'>r/aws/comments/kz79gj/hosting_database_on_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/'>r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/'>r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuxs6a/making_sure_im_not_getting_charged/'>r/aws/comments/kuxs6a/making_sure_im_not_getting_charged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvdzr/database_migration_service_question/'>r/aws/comments/kvvdzr/database_migration_service_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l63axw/ec2_and_amis/'>r/aws/comments/l63axw/ec2_and_amis/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/'>r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/'>r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l31jho/root_volume_formatted_as_xfs_while_attached/'>r/aws/comments/l31jho/root_volume_formatted_as_xfs_while_attached/</a></p>
</div>
<div label="terraform, 82" sentiment={0.10075942350332594}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujxws/resources_for_setting_up_a_new_aws_account_with/'>r/aws/comments/kujxws/resources_for_setting_up_a_new_aws_account_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/'>r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/'>r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/'>r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/'>r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7gp3/beginner_training_for_cloudformation/'>r/aws/comments/ky7gp3/beginner_training_for_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/'>r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/'>r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/konojg/using_terraform_013_with_aws_wildcard_certificates/'>r/aws/comments/konojg/using_terraform_013_with_aws_wildcard_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/'>r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/'>r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvvhy/implementing_albs_with_eks/'>r/aws/comments/kvvvhy/implementing_albs_with_eks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/'>r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/'>r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/'>r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knwnn7/ami_stability/'>r/aws/comments/knwnn7/ami_stability/</a></p>
</div>
<div label="ecs, 70" sentiment={0.08648660413660413}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq8dfg/container_scanning_tools/'>r/aws/comments/kq8dfg/container_scanning_tools/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kul06m/your_account_has_exceeded_85_of_the_usage_limit/'>r/aws/comments/kul06m/your_account_has_exceeded_85_of_the_usage_limit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo62y/need_guidance_on_approach_for_cicd_for_ecs_docker/'>r/aws/comments/kpo62y/need_guidance_on_approach_for_cicd_for_ecs_docker/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksygps/with_aws_ecs_how_can_i_pull_my_container_image/'>r/aws/comments/ksygps/with_aws_ecs_how_can_i_pull_my_container_image/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky1cyh/is_there_value_in_an_ecs_task_definition_health/'>r/aws/comments/ky1cyh/is_there_value_in_an_ecs_task_definition_health/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qwei/how_to_minimize_crossaz_traffic_costs_when_using/'>r/aws/comments/l2qwei/how_to_minimize_crossaz_traffic_costs_when_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzyiv/ecs_running_images_vulnerability_information/'>r/aws/comments/kqzyiv/ecs_running_images_vulnerability_information/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0nwtc/whats_the_best_way_to_pull_data_about_existing/'>r/aws/comments/l0nwtc/whats_the_best_way_to_pull_data_about_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0hsan/ecs_instance_type/'>r/aws/comments/l0hsan/ecs_instance_type/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9akpz/better_alternatives_to_ec2/'>r/aws/comments/l9akpz/better_alternatives_to_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7cbae/ecsalb_not_respecting_health_check_grace_period/'>r/aws/comments/l7cbae/ecsalb_not_respecting_health_check_grace_period/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/'>r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4jare/codepipeline_deploy_to_multiple_cloudformation/'>r/aws/comments/l4jare/codepipeline_deploy_to_multiple_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/'>r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kokbj0/load_balancer_503_service_temporarily_unavailable/'>r/aws/comments/kokbj0/load_balancer_503_service_temporarily_unavailable/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp4ijw/trying_to_install_praw_on_ec2_instance_getting/'>r/aws/comments/kp4ijw/trying_to_install_praw_on_ec2_instance_getting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20bsx/aws_ecs_task_boot_time/'>r/aws/comments/l20bsx/aws_ecs_task_boot_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/'>r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktfv06/how_to_best_provide_metrics_from_ecs_application/'>r/aws/comments/ktfv06/how_to_best_provide_metrics_from_ecs_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv78df/which_aws_service_to_choose_lambda_or_ec2_with/'>r/aws/comments/kv78df/which_aws_service_to_choose_lambda_or_ec2_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8aliv/how_to_migrate_from_amazon_linux_1_to_2/'>r/aws/comments/l8aliv/how_to_migrate_from_amazon_linux_1_to_2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/'>r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01kwn/which_is_the_best_aws_solution_which_i_can_use/'>r/aws/comments/l01kwn/which_is_the_best_aws_solution_which_i_can_use/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2vik8/sagemaker_question/'>r/aws/comments/l2vik8/sagemaker_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/'>r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/'>r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/'>r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/'>r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr4m1j/first_elastic_beanstalk_deployment_fails_requires/'>r/aws/comments/kr4m1j/first_elastic_beanstalk_deployment_fails_requires/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks124o/api_gateway_http_api_and_websockets/'>r/aws/comments/ks124o/api_gateway_http_api_and_websockets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv3s03/dinamycally_create_new_pipelines_in_codepipeline/'>r/aws/comments/kv3s03/dinamycally_create_new_pipelines_in_codepipeline/</a></p>
</div>
<div label="sqs, 70" sentiment={0.07015053597196454}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/'>r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4jxvd/use_sqs_for_large_batch_updatedelete_dynamodb_is/'>r/aws/comments/l4jxvd/use_sqs_for_large_batch_updatedelete_dynamodb_is/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2izun/how_to_ensure_no_race_condition_occurred_for/'>r/aws/comments/l2izun/how_to_ensure_no_race_condition_occurred_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/'>r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/'>r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kodm6o/running_multiple_instances_of_the_same_lambda/'>r/aws/comments/kodm6o/running_multiple_instances_of_the_same_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhxmi/best_way_to_implement_binary_autoscaling_for_once/'>r/aws/comments/kzhxmi/best_way_to_implement_binary_autoscaling_for_once/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l24blw/die_or_retry_on_database_error/'>r/aws/comments/l24blw/die_or_retry_on_database_error/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky2kwu/how_to_pass_variables_to_my_ssm_run_command/'>r/aws/comments/ky2kwu/how_to_pass_variables_to_my_ssm_run_command/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/'>r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jxhrln/kinesis_down/'>r/aws/comments/jxhrln/kinesis_down/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/km1236/is_there_a_free_tier_way_to_schedule_lambda/'>r/aws/comments/km1236/is_there_a_free_tier_way_to_schedule_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3n2ef/ways_of_diagnosing_issues_with_sns_sqs/'>r/aws/comments/l3n2ef/ways_of_diagnosing_issues_with_sns_sqs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/'>r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/'>r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/'>r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/'>r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/'>r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/'>r/aws/comments/kt14o1/api_gateway_http_api_integration_with_sqs_mapping/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/'>r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/'>r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3pixo/throttling_step_functions/'>r/aws/comments/l3pixo/throttling_step_functions/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/'>r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvwlkb/aws_sns_and_ec2_interaction/'>r/aws/comments/kvwlkb/aws_sns_and_ec2_interaction/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksugyc/will_ses_queue_messages_if_my_mailserver_is_down/'>r/aws/comments/ksugyc/will_ses_queue_messages_if_my_mailserver_is_down/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rpfk/wrong_message_format_when_use_lambda_with_sqs_as/'>r/aws/comments/l6rpfk/wrong_message_format_when_use_lambda_with_sqs_as/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/'>r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/'>r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzuf7/why_is_visibilitytimeout_not_called/'>r/aws/comments/kqzuf7/why_is_visibilitytimeout_not_called/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l73kyx/retries_on_scheduled_lambdas/'>r/aws/comments/l73kyx/retries_on_scheduled_lambdas/</a></p>
</div>
<div label="alb, 70" sentiment={0.04755119710221752}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky1cyh/is_there_value_in_an_ecs_task_definition_health/'>r/aws/comments/ky1cyh/is_there_value_in_an_ecs_task_definition_health/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/'>r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6thqs/https_with_eks_and_load_balancer/'>r/aws/comments/l6thqs/https_with_eks_and_load_balancer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/'>r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l65ua7/cheapest_basic_security_setup/'>r/aws/comments/l65ua7/cheapest_basic_security_setup/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks75lk/self_referencing_sg_not_working_with_alb_what_am/'>r/aws/comments/ks75lk/self_referencing_sg_not_working_with_alb_what_am/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7cbae/ecsalb_not_respecting_health_check_grace_period/'>r/aws/comments/l7cbae/ecsalb_not_respecting_health_check_grace_period/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/'>r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1kqa2/k8s_alb_ingress_controller/'>r/aws/comments/l1kqa2/k8s_alb_ingress_controller/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqihiz/502_error_due_to_the_wrong_zone_how_to_connect/'>r/aws/comments/kqihiz/502_error_due_to_the_wrong_zone_how_to_connect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7nf10/400_bad_request_nginx_on_ecs_fargate/'>r/aws/comments/l7nf10/400_bad_request_nginx_on_ecs_fargate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/'>r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/'>r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/'>r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvvhy/implementing_albs_with_eks/'>r/aws/comments/kvvvhy/implementing_albs_with_eks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/'>r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/'>r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwzm8g/aws_application_level_security_waf/'>r/aws/comments/kwzm8g/aws_application_level_security_waf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks124o/api_gateway_http_api_and_websockets/'>r/aws/comments/ks124o/api_gateway_http_api_and_websockets/</a></p>
</div>
<div label="ami, 65" sentiment={0.06921356421356421}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l449ll/ec2_spot_instance_and_custom_ami/'>r/aws/comments/l449ll/ec2_spot_instance_and_custom_ami/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq8dfg/container_scanning_tools/'>r/aws/comments/kq8dfg/container_scanning_tools/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b6i7/some_questions_about_ec2_pricing/'>r/aws/comments/l1b6i7/some_questions_about_ec2_pricing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzxrny/how_do_i_automate_the_process_of_patching_for/'>r/aws/comments/kzxrny/how_do_i_automate_the_process_of_patching_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/'>r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/'>r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/'>r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kymp2v/default_security_group_in_ami_launch/'>r/aws/comments/kymp2v/default_security_group_in_ami_launch/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvpxg8/better_way_to_update_a_fleet_of_spot_instances/'>r/aws/comments/kvpxg8/better_way_to_update_a_fleet_of_spot_instances/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1wacx/two_installations_two_instances_of_sql_server_on/'>r/aws/comments/l1wacx/two_installations_two_instances_of_sql_server_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/'>r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6eiwi/how_to_reuse_onprem_licensing_in_the_cloud/'>r/aws/comments/l6eiwi/how_to_reuse_onprem_licensing_in_the_cloud/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/'>r/aws/comments/kzs9gj/any_gotchas_when_communicating_between_subnets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l13us1/automating_software_installation_on_ec2_creation/'>r/aws/comments/l13us1/automating_software_installation_on_ec2_creation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/'>r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyjwfg/codedeploy_to_new_ec2_instances_launched_via_asg/'>r/aws/comments/kyjwfg/codedeploy_to_new_ec2_instances_launched_via_asg/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9givg/error_in_json_using_aws_cli/'>r/aws/comments/l9givg/error_in_json_using_aws_cli/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8aliv/how_to_migrate_from_amazon_linux_1_to_2/'>r/aws/comments/l8aliv/how_to_migrate_from_amazon_linux_1_to_2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/'>r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l63axw/ec2_and_amis/'>r/aws/comments/l63axw/ec2_and_amis/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knwnn7/ami_stability/'>r/aws/comments/knwnn7/ami_stability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l35pip/issue_reenabling_ec2_userdata_on_custom_ami/'>r/aws/comments/l35pip/issue_reenabling_ec2_userdata_on_custom_ami/</a></p>
</div>
<div label="cognito, 61" sentiment={0.05937773519740733}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqoil2/quickstart_for_onboarding_tenants_and_users_in_a/'>r/aws/comments/kqoil2/quickstart_for_onboarding_tenants_and_users_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knzje5/authentication_with_cognito_pool_per_tenant/'>r/aws/comments/knzje5/authentication_with_cognito_pool_per_tenant/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksaqga/uptime_monitoring_protected_api_gateway_resources/'>r/aws/comments/ksaqga/uptime_monitoring_protected_api_gateway_resources/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/'>r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kycr05/is_my_api_vulnerable_to_attackers/'>r/aws/comments/kycr05/is_my_api_vulnerable_to_attackers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/'>r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/'>r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxqqvq/calling_one_microservice_from_another/'>r/aws/comments/kxqqvq/calling_one_microservice_from_another/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx0jfn/using_cognito_user_groups_to_allow_finegrain/'>r/aws/comments/kx0jfn/using_cognito_user_groups_to_allow_finegrain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksqc5p/how_to_provide_federated_authentication_with/'>r/aws/comments/ksqc5p/how_to_provide_federated_authentication_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv0d5k/appsync_lambda_authorization_resolver/'>r/aws/comments/kv0d5k/appsync_lambda_authorization_resolver/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqz87/auth_service_for_mobile_application/'>r/aws/comments/kzqz87/auth_service_for_mobile_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqvvsb/integrating_okta_as_a_saml_identity_provider_in/'>r/aws/comments/kqvvsb/integrating_okta_as_a_saml_identity_provider_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwdk5d/what_aws_services_do_i_need_for_the_following/'>r/aws/comments/kwdk5d/what_aws_services_do_i_need_for_the_following/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1tfy4/suggestion_intergating_amazon_coginto_with_aws/'>r/aws/comments/l1tfy4/suggestion_intergating_amazon_coginto_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/js6tmv/aws_cognito_multiregion_failover/'>r/aws/comments/js6tmv/aws_cognito_multiregion_failover/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8iywv/android_how_to_securely_access_with_iam/'>r/aws/comments/l8iywv/android_how_to_securely_access_with_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw0zk7/serverless_user_authentication/'>r/aws/comments/kw0zk7/serverless_user_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvfec9/does_s3_work_for_this_requirement/'>r/aws/comments/kvfec9/does_s3_work_for_this_requirement/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1p100/cognito_account_migration_from_old_aws_cognito/'>r/aws/comments/l1p100/cognito_account_migration_from_old_aws_cognito/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8xsgn/amplify_storage_permission_question/'>r/aws/comments/l8xsgn/amplify_storage_permission_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kydzmi/high_level_explanation_of_api_gateway/'>r/aws/comments/kydzmi/high_level_explanation_of_api_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx3ap9/how_to_populate_ses_email_with_user_info_from/'>r/aws/comments/kx3ap9/how_to_populate_ses_email_with_user_info_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/'>r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptvux/need_help_with_amplify_cognito_angular_and_net/'>r/aws/comments/kptvux/need_help_with_amplify_cognito_angular_and_net/</a></p>
</div>
<div label="cli, 59" sentiment={0.12612168904541787}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw6n4d/cli_command_convention/'>r/aws/comments/kw6n4d/cli_command_convention/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/'>r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/'>r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l77h2u/how_do_i_push_a_custom_metric_using_the_iam_role/'>r/aws/comments/l77h2u/how_do_i_push_a_custom_metric_using_the_iam_role/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l41ga9/question_re_aws_cli/'>r/aws/comments/l41ga9/question_re_aws_cli/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1pws3/tagging_in_boto3/'>r/aws/comments/l1pws3/tagging_in_boto3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krv0ke/elasticbeanstalk_deploy_cli_command_exiting/'>r/aws/comments/krv0ke/elasticbeanstalk_deploy_cli_command_exiting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/'>r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxkeek/aws_cli_in_windows_is_giving_blank_output/'>r/aws/comments/kxkeek/aws_cli_in_windows_is_giving_blank_output/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqpqh4/aws_vault_is_a_tool_to_securely_store_and_access/'>r/aws/comments/kqpqh4/aws_vault_is_a_tool_to_securely_store_and_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvistk/s3_static_website_configuration/'>r/aws/comments/kvistk/s3_static_website_configuration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyr5h9/aws_cli_not_honoring_multifactorauthage/'>r/aws/comments/kyr5h9/aws_cli_not_honoring_multifactorauthage/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbbj4/help_deleting_lots_of_s3_objects_and_their/'>r/aws/comments/kqbbj4/help_deleting_lots_of_s3_objects_and_their/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq2ksa/multiple_lambdas_same_filename_overwrite_possible/'>r/aws/comments/kq2ksa/multiple_lambdas_same_filename_overwrite_possible/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksfvnc/awsgate_0100_released_with_support_for_connecting/'>r/aws/comments/ksfvnc/awsgate_0100_released_with_support_for_connecting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvq93e/frustrated_with_cli_on_powershell/'>r/aws/comments/kvq93e/frustrated_with_cli_on_powershell/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3t7ia/multiline_aws_cli_commands/'>r/aws/comments/l3t7ia/multiline_aws_cli_commands/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5uu32/new_tool_serverless_stack_toolkit_allows_you_to/'>r/aws/comments/l5uu32/new_tool_serverless_stack_toolkit_allows_you_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ytrf/where_is_the_data_in_the_s3_bucket/'>r/aws/comments/l6ytrf/where_is_the_data_in_the_s3_bucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l78n3y/which_terminal_do_you_guys_use_to_ssh_into_your/'>r/aws/comments/l78n3y/which_terminal_do_you_guys_use_to_ssh_into_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwhdbf/a_local_lambda_dev_environment_for_cdk/'>r/aws/comments/kwhdbf/a_local_lambda_dev_environment_for_cdk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2pqvt/how_to_execute_an_aws_cli_command_present_in_a/'>r/aws/comments/l2pqvt/how_to_execute_an_aws_cli_command_present_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw2342/lightsail_deployment_of_multiple_related/'>r/aws/comments/kw2342/lightsail_deployment_of_multiple_related/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/'>r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l18jtn/need_help_run_aws_cli_commands_in_jenkins_build/'>r/aws/comments/l18jtn/need_help_run_aws_cli_commands_in_jenkins_build/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kue2rn/securing_aws_api_credentials_and_access_to_aws_api/'>r/aws/comments/kue2rn/securing_aws_api_credentials_and_access_to_aws_api/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrn3c/running_1_python_files_at_the_same_time_in_aws/'>r/aws/comments/kwrn3c/running_1_python_files_at_the_same_time_in_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksegsz/can_somebody_eli5_how_to_setup_mfa_in_the_cli/'>r/aws/comments/ksegsz/can_somebody_eli5_how_to_setup_mfa_in_the_cli/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7yvoi/trigger_lambda_to_start_an_ec2_instance_based_on/'>r/aws/comments/l7yvoi/trigger_lambda_to_start_an_ec2_instance_based_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/'>r/aws/comments/l7jehp/auto_tag_resources_with_programatic_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/'>r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/j3nue4/aws_sso_with_justintime_privileges/'>r/aws/comments/j3nue4/aws_sso_with_justintime_privileges/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv7b7q/how_to_enable_logging_on_every_aws_service_in/'>r/aws/comments/kv7b7q/how_to_enable_logging_on_every_aws_service_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3s75r/how_to_administer_serverless_microservices/'>r/aws/comments/l3s75r/how_to_administer_serverless_microservices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5edb6/what_can_block_cli_access_if_you_have_access_keys/'>r/aws/comments/l5edb6/what_can_block_cli_access_if_you_have_access_keys/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krafru/aws_cli_access_using_ses_vpc_endpoint/'>r/aws/comments/krafru/aws_cli_access_using_ses_vpc_endpoint/</a></p>
</div>
<div label="vpn, 55" sentiment={0.05626262626262627}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kue382/very_low_bandwith_from_aws_vpc_to_internet/'>r/aws/comments/kue382/very_low_bandwith_from_aws_vpc_to_internet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0f70p/dx_gateway_with_transit_vif_vpn_options/'>r/aws/comments/l0f70p/dx_gateway_with_transit_vif_vpn_options/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/'>r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0ziln/why_is_aws_vpn_so_expensive/'>r/aws/comments/l0ziln/why_is_aws_vpn_so_expensive/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz4jn8/aws_console_sit_cant_be_reached/'>r/aws/comments/kz4jn8/aws_console_sit_cant_be_reached/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/'>r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/'>r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxivyn/vpn_access_for_iam_users/'>r/aws/comments/kxivyn/vpn_access_for_iam_users/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/'>r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/'>r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvqqtz/access_documentdb_without_ssh_tunneling/'>r/aws/comments/kvqqtz/access_documentdb_without_ssh_tunneling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/'>r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b8sz/best_region_for_getting_data_out_from_china_as/'>r/aws/comments/l1b8sz/best_region_for_getting_data_out_from_china_as/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv54t2/transferring_elastic_ip_between_aws_accounts/'>r/aws/comments/kv54t2/transferring_elastic_ip_between_aws_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktakvs/awsvpn_client_osx/'>r/aws/comments/ktakvs/awsvpn_client_osx/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20h7t/using_palo_alto_ec2_instance_cannot_get_internet/'>r/aws/comments/l20h7t/using_palo_alto_ec2_instance_cannot_get_internet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfhcw/authorise_inbound_rules_to_my_instance_ssh_ip/'>r/aws/comments/kyfhcw/authorise_inbound_rules_to_my_instance_ssh_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqd7w6/ec2_or_workspaces/'>r/aws/comments/kqd7w6/ec2_or_workspaces/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/'>r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/'>r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l30uzn/aws_site_to_site_vpn_tgw_load_balancing_algorithm/'>r/aws/comments/l30uzn/aws_site_to_site_vpn_tgw_load_balancing_algorithm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6feqn/security_group_question/'>r/aws/comments/l6feqn/security_group_question/</a></p>
</div>
<div label="elasticsearch, 54" sentiment={0.11634076657224804}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/'>r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/'>r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/'>r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktrclm/best_options_to_search_large_amounts_of_data/'>r/aws/comments/ktrclm/best_options_to_search_large_amounts_of_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qh5d/kafka_connect_with_elasticsearch_in_aws/'>r/aws/comments/l2qh5d/kafka_connect_with_elasticsearch_in_aws/</a></p>
</div>
<div label="ssm, 47" sentiment={0.06012537993920973}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvw5p7/accessing_aws_ec2_via_ssh_without_exposing_the_ssh/'>r/aws/comments/kvw5p7/accessing_aws_ec2_via_ssh_without_exposing_the_ssh/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw47xt/easy_way_to_report_onalert_on_a_certain/'>r/aws/comments/kw47xt/easy_way_to_report_onalert_on_a_certain/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1pbv9/eks_workers_not_joining_cluster_consistently/'>r/aws/comments/l1pbv9/eks_workers_not_joining_cluster_consistently/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/'>r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks2l9q/how_should_rest_apis_communicate_in_a_serverless/'>r/aws/comments/ks2l9q/how_should_rest_apis_communicate_in_a_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky2kwu/how_to_pass_variables_to_my_ssm_run_command/'>r/aws/comments/ky2kwu/how_to_pass_variables_to_my_ssm_run_command/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpn2di/why_you_should_never_ever_print_in_a_lambda/'>r/aws/comments/kpn2di/why_you_should_never_ever_print_in_a_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/'>r/aws/comments/kt0f6p/more_than_5_security_groups_on_an_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/'>r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1faud/why_ec2_is_giving_me_private_key_it_wont_accept/'>r/aws/comments/l1faud/why_ec2_is_giving_me_private_key_it_wont_accept/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/'>r/aws/comments/l3fl25/able_to_ssh_directly_to_ec2s_in_private_subnet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/'>r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt5fcf/aws_config_versus_aws_system_manager_for/'>r/aws/comments/kt5fcf/aws_config_versus_aws_system_manager_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/k55z23/ive_found_how_to_create_the_new_lambda_container/'>r/aws/comments/k55z23/ive_found_how_to_create_the_new_lambda_container/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l13us1/automating_software_installation_on_ec2_creation/'>r/aws/comments/l13us1/automating_software_installation_on_ec2_creation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/'>r/aws/comments/l613a7/changing_security_group_due_to_the_dynamic_public/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l78n3y/which_terminal_do_you_guys_use_to_ssh_into_your/'>r/aws/comments/l78n3y/which_terminal_do_you_guys_use_to_ssh_into_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l71zce/quick_howto_to_get_windows_machine_domainjoined/'>r/aws/comments/l71zce/quick_howto_to_get_windows_machine_domainjoined/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvwlkb/aws_sns_and_ec2_interaction/'>r/aws/comments/kvwlkb/aws_sns_and_ec2_interaction/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/'>r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0mgta/triggering_scripts_on_an_ec2_instance_from_a/'>r/aws/comments/l0mgta/triggering_scripts_on_an_ec2_instance_from_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6feqn/security_group_question/'>r/aws/comments/l6feqn/security_group_question/</a></p>
</div>
<div label="ui, 45" sentiment={0.08350915905082572}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqoil2/quickstart_for_onboarding_tenants_and_users_in_a/'>r/aws/comments/kqoil2/quickstart_for_onboarding_tenants_and_users_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krez9h/displaying_last_value_from_iot_devices_in/'>r/aws/comments/krez9h/displaying_last_value_from_iot_devices_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/'>r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/'>r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/'>r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/'>r/aws/comments/kzqhsm/is_amazon_glacier_the_next_service_to_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmhe9i/creating_lambda_functions_in_aws_cloud9/'>r/aws/comments/kmhe9i/creating_lambda_functions_in_aws_cloud9/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz8fpg/so_you_can_run_headful_chrome_on_lambda_now_this/'>r/aws/comments/kz8fpg/so_you_can_run_headful_chrome_on_lambda_now_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/'>r/aws/comments/j129il/im_trying_to_define_how_the_aws_docs_are_so_bad/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ii8ts4/the_new_route_53_ui_is_terrible/'>r/aws/comments/ii8ts4/the_new_route_53_ui_is_terrible/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz8hzj/the_aws_resources_tab_in_cloud9_is_not_showing/'>r/aws/comments/kz8hzj/the_aws_resources_tab_in_cloud9_is_not_showing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kydzmi/high_level_explanation_of_api_gateway/'>r/aws/comments/kydzmi/high_level_explanation_of_api_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l53e50/are_there_any_tools_or_services_that_i_can/'>r/aws/comments/l53e50/are_there_any_tools_or_services_that_i_can/</a></p>
</div>
<div label="ses, 45" sentiment={0.042909652076318736}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv0ovl/is_it_possible_to_setup_dkim_with_2048_bit_keys/'>r/aws/comments/kv0ovl/is_it_possible_to_setup_dkim_with_2048_bit_keys/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksugyc/will_ses_queue_messages_if_my_mailserver_is_down/'>r/aws/comments/ksugyc/will_ses_queue_messages_if_my_mailserver_is_down/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx432g/ses_iam_user_logging/'>r/aws/comments/kx432g/ses_iam_user_logging/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/'>r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx3ap9/how_to_populate_ses_email_with_user_info_from/'>r/aws/comments/kx3ap9/how_to_populate_ses_email_with_user_info_from/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxy1u6/centralizing_smtp_usage_across_multiple_projects/'>r/aws/comments/kxy1u6/centralizing_smtp_usage_across_multiple_projects/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko6wan/automated_system_keep_rejecting_ses_sandbox_out/'>r/aws/comments/ko6wan/automated_system_keep_rejecting_ses_sandbox_out/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l97ysw/what_could_we_possibly_do_wrong/'>r/aws/comments/l97ysw/what_could_we_possibly_do_wrong/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8xb7w/help_with_sending_emails_from_aws/'>r/aws/comments/l8xb7w/help_with_sending_emails_from_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/'>r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/'>r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvb0y1/for_those_who_had_their_sandbox_request_rejected/'>r/aws/comments/kvb0y1/for_those_who_had_their_sandbox_request_rejected/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/'>r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/'>r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqcsub/ses_question_deliverability_restricted_for/'>r/aws/comments/kqcsub/ses_question_deliverability_restricted_for/</a></p>
</div>
<div label="elastic, 42" sentiment={0.08536577509791796}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/'>r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/'>r/aws/comments/l1bmne/what_are_the_differences_between_aws_services_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/'>r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwi6dc/cant_connect_my_elastic_beanstalk_app_to_my_rds/'>r/aws/comments/kwi6dc/cant_connect_my_elastic_beanstalk_app_to_my_rds/</a></p>
</div>
<div label="sql, 41" sentiment={0.07085365853658537}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5azym/query_aws_resources_with_sql/'>r/aws/comments/l5azym/query_aws_resources_with_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/'>r/aws/comments/l068ee/highlevel_serverless_web_app_architecture_guidance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksx1vp/event_sourcing_third_party_data_such_as_stripe/'>r/aws/comments/ksx1vp/event_sourcing_third_party_data_such_as_stripe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/'>r/aws/comments/l0k0yv/sql_server_on_aws_making_new_dev_databases_based/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1wacx/two_installations_two_instances_of_sql_server_on/'>r/aws/comments/l1wacx/two_installations_two_instances_of_sql_server_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/'>r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx6q2y/how_to_run_aws_cis_checks_with_cloudquery/'>r/aws/comments/kx6q2y/how_to_run_aws_cis_checks_with_cloudquery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7elmc/aws_resource_inventory_database_for_organizations/'>r/aws/comments/l7elmc/aws_resource_inventory_database_for_organizations/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l95vpb/are_we_digging_our_own_grave/'>r/aws/comments/l95vpb/are_we_digging_our_own_grave/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6s8jh/query_aws_with_sql_ft_steampipe/'>r/aws/comments/l6s8jh/query_aws_with_sql_ft_steampipe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6umfm/can_i_get_list_of_s3_bucket_which_are_set_with/'>r/aws/comments/l6umfm/can_i_get_list_of_s3_bucket_which_are_set_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/'>r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8p02i/security_assessment_help/'>r/aws/comments/l8p02i/security_assessment_help/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/'>r/aws/comments/kpxans/the_way_to_connect_to_my_ec2_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/'>r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/'>r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jzxf52/you_now_can_use_a_sqlcompatible_query_language_to/'>r/aws/comments/jzxf52/you_now_can_use_a_sqlcompatible_query_language_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7f2x1/preventing_sql_injection_with_appsync/'>r/aws/comments/l7f2x1/preventing_sql_injection_with_appsync/</a></p>
</div>
<div label="aurora, 38" sentiment={0.059472307663097135}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7lb58/what_is_the_difference_between_aws_dms_and/'>r/aws/comments/l7lb58/what_is_the_difference_between_aws_dms_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwvaoa/rds_postgresql_read_replica_out_of_date_query/'>r/aws/comments/kwvaoa/rds_postgresql_read_replica_out_of_date_query/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1914y/how_to_configure_a_regionally_redundant/'>r/aws/comments/l1914y/how_to_configure_a_regionally_redundant/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvm340/noob_question_how_does_read_replica_works/'>r/aws/comments/kvm340/noob_question_how_does_read_replica_works/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvtreo/passing_userschema_á_la_mongoose_to_aurora_in_rds/'>r/aws/comments/kvtreo/passing_userschema_á_la_mongoose_to_aurora_in_rds/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv150m/how_aws_is_creating_read_replicas_within_23/'>r/aws/comments/kv150m/how_aws_is_creating_read_replicas_within_23/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6zjjc/cost_savings_solution/'>r/aws/comments/l6zjjc/cost_savings_solution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks59bn/how_long_does_it_roughly_take_for_aurora/'>r/aws/comments/ks59bn/how_long_does_it_roughly_take_for_aurora/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/'>r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksfvnc/awsgate_0100_released_with_support_for_connecting/'>r/aws/comments/ksfvnc/awsgate_0100_released_with_support_for_connecting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8zx1g/aurora_now_supports_postgresql_12/'>r/aws/comments/l8zx1g/aurora_now_supports_postgresql_12/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/'>r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/'>r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/'>r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks45t9/unable_to_invoke_lambda_function_from_an_aurora/'>r/aws/comments/ks45t9/unable_to_invoke_lambda_function_from_an_aurora/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kojdi3/aurora_mysql_57_dml_auditing_options/'>r/aws/comments/kojdi3/aurora_mysql_57_dml_auditing_options/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5src5/does_increase_the_allocated_storage_add_cost_even/'>r/aws/comments/l5src5/does_increase_the_allocated_storage_add_cost_even/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gtvb/how_to_implement_row_level_security_in_redshift/'>r/aws/comments/l7gtvb/how_to_implement_row_level_security_in_redshift/</a></p>
</div>
<div label="acm, 38" sentiment={0.1001074113856069}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxecuc/requesting_help_configuring_route53_hosted_zones/'>r/aws/comments/kxecuc/requesting_help_configuring_route53_hosted_zones/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt2792/no_matter_what_i_do_i_cannot_seem_to_get_cdk_to/'>r/aws/comments/kt2792/no_matter_what_i_do_i_cannot_seem_to_get_cdk_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2e2p7/custom_domain_for_both_amplify_and_api_gateway/'>r/aws/comments/l2e2p7/custom_domain_for_both_amplify_and_api_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/'>r/aws/comments/kwrdlq/is_aws_secure_enough_to_safely_store_privileged/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krrsfy/aws_cli_getcertificate/'>r/aws/comments/krrsfy/aws_cli_getcertificate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kunw45/what_would_cause_a_successfully_issued_acm/'>r/aws/comments/kunw45/what_would_cause_a_successfully_issued_acm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks089r/custom_subdomain_per_tenant_in_a_multitenant_b2b/'>r/aws/comments/ks089r/custom_subdomain_per_tenant_in_a_multitenant_b2b/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/'>r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/'>r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvscph/ssl_certificates/'>r/aws/comments/kvscph/ssl_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/'>r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz4nzx/aws_acm_private_ca_as_extension_of_existing_on/'>r/aws/comments/kz4nzx/aws_acm_private_ca_as_extension_of_existing_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/'>r/aws/comments/kztrl5/whitelabelled_multi_tenant_saas_application_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvvhy/implementing_albs_with_eks/'>r/aws/comments/kvvvhy/implementing_albs_with_eks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/'>r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komi83/aws_certificate_manager_validation_with_google/'>r/aws/comments/komi83/aws_certificate_manager_validation_with_google/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6tl5t/is_there_a_way_to_serve_static_websites_hosted/'>r/aws/comments/l6tl5t/is_there_a_way_to_serve_static_websites_hosted/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/'>r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxw78q/import_p12_cert_to_acm_without_chain/'>r/aws/comments/kxw78q/import_p12_cert_to_acm_without_chain/</a></p>
</div>
<div label="fargate, 37" sentiment={0.048592342342342346}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8v5td/newb_logging_question/'>r/aws/comments/l8v5td/newb_logging_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01kwn/which_is_the_best_aws_solution_which_i_can_use/'>r/aws/comments/l01kwn/which_is_the_best_aws_solution_which_i_can_use/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20bsx/aws_ecs_task_boot_time/'>r/aws/comments/l20bsx/aws_ecs_task_boot_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/'>r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/'>r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/'>r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/'>r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qwei/how_to_minimize_crossaz_traffic_costs_when_using/'>r/aws/comments/l2qwei/how_to_minimize_crossaz_traffic_costs_when_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/'>r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzyiv/ecs_running_images_vulnerability_information/'>r/aws/comments/kqzyiv/ecs_running_images_vulnerability_information/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/'>r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8aliv/how_to_migrate_from_amazon_linux_1_to_2/'>r/aws/comments/l8aliv/how_to_migrate_from_amazon_linux_1_to_2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3gt5p/postgrest_on_fargate/'>r/aws/comments/l3gt5p/postgrest_on_fargate/</a></p>
</div>
<div label="mfa, 36" sentiment={0.06958724146224148}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/'>r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksegsz/can_somebody_eli5_how_to_setup_mfa_in_the_cli/'>r/aws/comments/ksegsz/can_somebody_eli5_how_to_setup_mfa_in_the_cli/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/'>r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktudr7/yubikey_not_being_detected_inside_amazon/'>r/aws/comments/ktudr7/yubikey_not_being_detected_inside_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l65ua7/cheapest_basic_security_setup/'>r/aws/comments/l65ua7/cheapest_basic_security_setup/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/'>r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwkmdt/disable_or_read_only_for_root_account_for_an/'>r/aws/comments/kwkmdt/disable_or_read_only_for_root_account_for_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/'>r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/'>r/aws/comments/kzsojh/my_account_was_compromised_and_i_suddenly_owe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/'>r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyr5h9/aws_cli_not_honoring_multifactorauthage/'>r/aws/comments/kyr5h9/aws_cli_not_honoring_multifactorauthage/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/'>r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqn95q/s3_bucket_lockdow/'>r/aws/comments/kqn95q/s3_bucket_lockdow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kue2rn/securing_aws_api_credentials_and_access_to_aws_api/'>r/aws/comments/kue2rn/securing_aws_api_credentials_and_access_to_aws_api/</a></p>
</div>
<div label="sns, 36" sentiment={0.05226100288600289}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1mc46/can_you_retrigger_a_cw_alarm/'>r/aws/comments/l1mc46/can_you_retrigger_a_cw_alarm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1a3o3/aws_account_id_in_sns_topic_event/'>r/aws/comments/l1a3o3/aws_account_id_in_sns_topic_event/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwckiz/we_just_launched_support_for_sns_message/'>r/aws/comments/kwckiz/we_just_launched_support_for_sns_message/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/'>r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3n2ef/ways_of_diagnosing_issues_with_sns_sqs/'>r/aws/comments/l3n2ef/ways_of_diagnosing_issues_with_sns_sqs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/'>r/aws/comments/l8susw/potentially_dumb_q_what_services_should_i_use_if/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kodm6o/running_multiple_instances_of_the_same_lambda/'>r/aws/comments/kodm6o/running_multiple_instances_of_the_same_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/'>r/aws/comments/kyeh5j/sqs_sns_confused_how_to_use_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvxwjt/how_to_monitor_when_a_lambda_function_is_not/'>r/aws/comments/kvxwjt/how_to_monitor_when_a_lambda_function_is_not/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/'>r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knwnn7/ami_stability/'>r/aws/comments/knwnn7/ami_stability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv8xcv/can_you_have_a_cloudwatch_alarm_with_different/'>r/aws/comments/kv8xcv/can_you_have_a_cloudwatch_alarm_with_different/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqc8lr/graphql_vs_pub_sub_whats_the_difference/'>r/aws/comments/kqc8lr/graphql_vs_pub_sub_whats_the_difference/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1soaj/any_way_to_retry_failed_sms_that_were_sent_via/'>r/aws/comments/l1soaj/any_way_to_retry_failed_sms_that_were_sent_via/</a></p>
</div>
<div label="sdk, 33" sentiment={0.07140151515151516}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l33oop/set_up_named_shadow_with_aws_c_sdk/'>r/aws/comments/l33oop/set_up_named_shadow_with_aws_c_sdk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqimzv/best_way_to_get_last_value_from_streaming_data_in/'>r/aws/comments/kqimzv/best_way_to_get_last_value_from_streaming_data_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/'>r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktut7f/how_to_automate_uploading_data_into_s3_bucket/'>r/aws/comments/ktut7f/how_to_automate_uploading_data_into_s3_bucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/'>r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvuix5/does_general_available_mean_production_ready/'>r/aws/comments/kvuix5/does_general_available_mean_production_ready/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxph1w/is_there_an_existing_tool_to_determine_what_iam/'>r/aws/comments/kxph1w/is_there_an_existing_tool_to_determine_what_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l77h2u/how_do_i_push_a_custom_metric_using_the_iam_role/'>r/aws/comments/l77h2u/how_do_i_push_a_custom_metric_using_the_iam_role/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz4nd4/tips_in_automated_switching_from_unlimited_mode/'>r/aws/comments/kz4nd4/tips_in_automated_switching_from_unlimited_mode/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqwi9o/create_generic_client_builder_with_aws_java_sdk/'>r/aws/comments/kqwi9o/create_generic_client_builder_with_aws_java_sdk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l08tm0/v3_sdk_and_jest_mock/'>r/aws/comments/l08tm0/v3_sdk_and_jest_mock/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2q6zm/how_to_access_aws_cognito_admin_api/'>r/aws/comments/l2q6zm/how_to_access_aws_cognito_admin_api/</a></p>
</div>
<div label="athena, 30" sentiment={0.04573853615520281}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ytrf/where_is_the_data_in_the_s3_bucket/'>r/aws/comments/l6ytrf/where_is_the_data_in_the_s3_bucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2u8cv/log4net_s3_appender_is_it_efficient/'>r/aws/comments/l2u8cv/log4net_s3_appender_is_it_efficient/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6zjjc/cost_savings_solution/'>r/aws/comments/l6zjjc/cost_savings_solution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr1mjq/how_to_estimate_cost/'>r/aws/comments/kr1mjq/how_to_estimate_cost/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kybzlz/query_s3_bucket_from_athena_in_another_aws_account/'>r/aws/comments/kybzlz/query_s3_bucket_from_athena_in_another_aws_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksgiu7/help_glue_and_athena_exclude_patterns/'>r/aws/comments/ksgiu7/help_glue_and_athena_exclude_patterns/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/'>r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/'>r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/'>r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktm6xz/aws_athena_geoip_lookups_with_free_maxmind/'>r/aws/comments/ktm6xz/aws_athena_geoip_lookups_with_free_maxmind/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07npv/help_restrict_athena_workgroup_to_specific/'>r/aws/comments/l07npv/help_restrict_athena_workgroup_to_specific/</a></p>
</div>
<div label="cors, 30" sentiment={-0.013472222222222222}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyxf6n/http_api_jwt_authorizer_stuck_forever/'>r/aws/comments/kyxf6n/http_api_jwt_authorizer_stuck_forever/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyrhl1/blocked_my_cors_policy/'>r/aws/comments/kyrhl1/blocked_my_cors_policy/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqjqsa/building_a_full_stack_app/'>r/aws/comments/kqjqsa/building_a_full_stack_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzxsac/cors_issue_need_help/'>r/aws/comments/kzxsac/cors_issue_need_help/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kswwre/authenticate_app_only_not_user/'>r/aws/comments/kswwre/authenticate_app_only_not_user/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxc7wh/presigned_url_question/'>r/aws/comments/kxc7wh/presigned_url_question/</a></p>
</div>
<div label="cfn, 28" sentiment={-0.03947510822510823}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2hnk3/cloudformation_drift_results_not_updating_or/'>r/aws/comments/l2hnk3/cloudformation_drift_results_not_updating_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/'>r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/'>r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/'>r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
</div>
<div label="foss, 27" sentiment={0.0671957671957672}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/'>r/aws/comments/kw3g8b/how_do_i_limit_the_requests_that_lambda_accepts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
</div>
<div label="-&gt, 26" sentiment={0.016929651545036156}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kokbj0/load_balancer_503_service_temporarily_unavailable/'>r/aws/comments/kokbj0/load_balancer_503_service_temporarily_unavailable/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/'>r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6umfm/can_i_get_list_of_s3_bucket_which_are_set_with/'>r/aws/comments/l6umfm/can_i_get_list_of_s3_bucket_which_are_set_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/'>r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kza6sg/problem_with_ec2_instance/'>r/aws/comments/kza6sg/problem_with_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/'>r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3pixo/throttling_step_functions/'>r/aws/comments/l3pixo/throttling_step_functions/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/'>r/aws/comments/kujeuj/ip_address_rerouting_for_home_game_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv8xcv/can_you_have_a_cloudwatch_alarm_with_different/'>r/aws/comments/kv8xcv/can_you_have_a_cloudwatch_alarm_with_different/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/'>r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/</a></p>
</div>
<div label="control tower, 26" sentiment={0.12085830835830837}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/'>r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/'>r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kujxws/resources_for_setting_up_a_new_aws_account_with/'>r/aws/comments/kujxws/resources_for_setting_up_a_new_aws_account_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/'>r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx90dv/aws_sso_and_user_management_in_a_multiaccount/'>r/aws/comments/kx90dv/aws_sso_and_user_management_in_a_multiaccount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6i71n/has_anyone_used_aws_secure_environment_accelerator/'>r/aws/comments/l6i71n/has_anyone_used_aws_secure_environment_accelerator/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6km8n/made_an_organization_in_control_tower_added_our/'>r/aws/comments/l6km8n/made_an_organization_in_control_tower_added_our/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwiruc/consolidate_cost_management_of_multiple_aws/'>r/aws/comments/kwiruc/consolidate_cost_management_of_multiple_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
</div>
<div label="heroku, 25" sentiment={0.12923520923520926}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvnxd4/qovery_turns_app_deployment_on_aws_as_simple_as/'>r/aws/comments/kvnxd4/qovery_turns_app_deployment_on_aws_as_simple_as/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/'>r/aws/comments/kvyp34/i_over_looked_elb_costs_for_an_app_and_now_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/'>r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/'>r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/'>r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/'>r/aws/comments/l9bhyw/blazingly_fast_app_deployment_on_aws_with_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
</div>
<div label="iops, 25" sentiment={0.04032900432900433}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/'>r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqx8yf/query_about_where_a_charge_on_my_billing_is/'>r/aws/comments/kqx8yf/query_about_where_a_charge_on_my_billing_is/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqupib/does_iops_and_throughput_scale_with_number_of_gp3/'>r/aws/comments/kqupib/does_iops_and_throughput_scale_with_number_of_gp3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks8ywp/understanding_maximum_and_baseline_iops_on/'>r/aws/comments/ks8ywp/understanding_maximum_and_baseline_iops_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/'>r/aws/comments/kynu0r/maxing_out_iops_on_an_ec2_with_raid0_wgp3_anyone/</a></p>
</div>
<div label="route 53, 23" sentiment={0.09201816299642386}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/'>r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kraeyl/multiregion_failover_in_the_cognito_service/'>r/aws/comments/kraeyl/multiregion_failover_in_the_cognito_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/'>r/aws/comments/ko7eld/how_can_i_direct_my_dns_to_aws_cloudfront_if_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lrx1/can_you_help_me/'>r/aws/comments/l1lrx1/can_you_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/'>r/aws/comments/kwjau2/long_connection_creation_time_when_connecting_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/'>r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/'>r/aws/comments/kskofi/aws_ses_cant_see_route_53_dns_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/'>r/aws/comments/kr0w3a/need_help_properly_creating_cnames_and_a_records/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/'>r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/'>r/aws/comments/l927ol/awsautodns_automatic_aws_route53_domain/</a></p>
</div>
<div label="google, 23" sentiment={0.05715160141790577}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw0zk7/serverless_user_authentication/'>r/aws/comments/kw0zk7/serverless_user_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0wrfz/ec2_only_games_videos_not_smouthly/'>r/aws/comments/l0wrfz/ec2_only_games_videos_not_smouthly/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kul06m/your_account_has_exceeded_85_of_the_usage_limit/'>r/aws/comments/kul06m/your_account_has_exceeded_85_of_the_usage_limit/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlevw/amazon_is_hosting_parler/'>r/aws/comments/ktlevw/amazon_is_hosting_parler/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx9h13/execute_a_32bit_application_on_arm64_aarch64/'>r/aws/comments/kx9h13/execute_a_32bit_application_on_arm64_aarch64/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/'>r/aws/comments/l0fspp/my_mails_goes_to_spam_not_sure_if_its_only_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/'>r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/'>r/aws/comments/ko96hf/how_long_should_i_wait_for_the_dns_records_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
</div>
<div label="twitter, 23" sentiment={0.060054347826086964}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw0zk7/serverless_user_authentication/'>r/aws/comments/kw0zk7/serverless_user_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku390o/early_foundation_of_aws_a_backstory/'>r/aws/comments/ku390o/early_foundation_of_aws_a_backstory/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlevw/amazon_is_hosting_parler/'>r/aws/comments/ktlevw/amazon_is_hosting_parler/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/'>r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/'>r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktqsuy/parler_runs_on_aws/'>r/aws/comments/ktqsuy/parler_runs_on_aws/</a></p>
</div>
<div label="eventbridge, 22" sentiment={0.00893097643097643}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/'>r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20bsx/aws_ecs_task_boot_time/'>r/aws/comments/l20bsx/aws_ecs_task_boot_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l73kyx/retries_on_scheduled_lambdas/'>r/aws/comments/l73kyx/retries_on_scheduled_lambdas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/'>r/aws/comments/l1dhot/how_to_ensure_events_are_emitted_in_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt5fcf/aws_config_versus_aws_system_manager_for/'>r/aws/comments/kt5fcf/aws_config_versus_aws_system_manager_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktunf7/webhook_listener_ec2_vs_lambda/'>r/aws/comments/ktunf7/webhook_listener_ec2_vs_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksx1vp/event_sourcing_third_party_data_such_as_stripe/'>r/aws/comments/ksx1vp/event_sourcing_third_party_data_such_as_stripe/</a></p>
</div>
<div label="documentdb, 21" sentiment={0.059920634920634916}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzs2kx/slow_local_queries/'>r/aws/comments/kzs2kx/slow_local_queries/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9a9ju/mongodb_set_replication_to_documentdb/'>r/aws/comments/l9a9ju/mongodb_set_replication_to_documentdb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/'>r/aws/comments/kx5j1y/amazon_elasticsearch_79_is_missing_wildcard_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx3sju/replicate_documentdb_to_a_local_mongo_service/'>r/aws/comments/kx3sju/replicate_documentdb_to_a_local_mongo_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/'>r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5cs32/documentdb_index_is_growing_like_crazy/'>r/aws/comments/l5cs32/documentdb_index_is_growing_like_crazy/</a></p>
</div>
<div label="apple, 21" sentiment={0.13093442932728644}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/k702cl/how_do_you_deal_with_the_alert_fatigue_problem/'>r/aws/comments/k702cl/how_do_you_deal_with_the_alert_fatigue_problem/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq74mq/any_info_on_when_mac_ec2_instances_will_be/'>r/aws/comments/kq74mq/any_info_on_when_mac_ec2_instances_will_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksg01z/aws_has_terrible_customer_service/'>r/aws/comments/ksg01z/aws_has_terrible_customer_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktqsuy/parler_runs_on_aws/'>r/aws/comments/ktqsuy/parler_runs_on_aws/</a></p>
</div>
<div label="codepipeline, 20" sentiment={0.06502164502164502}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksga5x/start_custom_docker_container_with_aws_lambda/'>r/aws/comments/ksga5x/start_custom_docker_container_with_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l55n9d/codepipeline_grab_a_file_out_of_source_artifact/'>r/aws/comments/l55n9d/codepipeline_grab_a_file_out_of_source_artifact/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3vrcn/when_will_codepipeline_get_a_manual_rollback/'>r/aws/comments/l3vrcn/when_will_codepipeline_get_a_manual_rollback/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3t8yw/codebuild_codecommit_codepipeline_with_packer/'>r/aws/comments/l3t8yw/codebuild_codecommit_codepipeline_with_packer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxvs89/codebuild_question_is_our_setup_nonstandard/'>r/aws/comments/kxvs89/codebuild_question_is_our_setup_nonstandard/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/'>r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx2aoz/nodejs_in_elastic_beanstalk/'>r/aws/comments/kx2aoz/nodejs_in_elastic_beanstalk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4jare/codepipeline_deploy_to_multiple_cloudformation/'>r/aws/comments/l4jare/codepipeline_deploy_to_multiple_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4e9ar/codepipeline_ignore_readmemd/'>r/aws/comments/l4e9ar/codepipeline_ignore_readmemd/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/'>r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv3s03/dinamycally_create_new_pipelines_in_codepipeline/'>r/aws/comments/kv3s03/dinamycally_create_new_pipelines_in_codepipeline/</a></p>
</div>
<div label="wordpress, 20" sentiment={0.14789141414141413}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/'>r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzjyko/general_knowledge_aws_newbie/'>r/aws/comments/kzjyko/general_knowledge_aws_newbie/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksehju/how_to_remove_a_301_redirect_from_lightsail/'>r/aws/comments/ksehju/how_to_remove_a_301_redirect_from_lightsail/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/'>r/aws/comments/kotqcy/what_in_the_aws_ecosystem_do_you_recommend_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2bkly/im_expecting_5000_simultaneous_active_users_this/'>r/aws/comments/l2bkly/im_expecting_5000_simultaneous_active_users_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksg01z/aws_has_terrible_customer_service/'>r/aws/comments/ksg01z/aws_has_terrible_customer_service/</a></p>
</div>
<div label="docker, 20" sentiment={0.09322443181818182}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksga5x/start_custom_docker_container_with_aws_lambda/'>r/aws/comments/ksga5x/start_custom_docker_container_with_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp4ijw/trying_to_install_praw_on_ec2_instance_getting/'>r/aws/comments/kp4ijw/trying_to_install_praw_on_ec2_instance_getting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20bsx/aws_ecs_task_boot_time/'>r/aws/comments/l20bsx/aws_ecs_task_boot_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksygps/with_aws_ecs_how_can_i_pull_my_container_image/'>r/aws/comments/ksygps/with_aws_ecs_how_can_i_pull_my_container_image/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxcpv8/running_kubernetes_locally_minikube_on_an_aws/'>r/aws/comments/kxcpv8/running_kubernetes_locally_minikube_on_an_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/'>r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/'>r/aws/comments/kup2h5/how_do_you_develop_and_test_on_aws_as_a_team/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyr5h9/aws_cli_not_honoring_multifactorauthage/'>r/aws/comments/kyr5h9/aws_cli_not_honoring_multifactorauthage/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzq5q/ffmpeg_code_not_working_in_aws_lambda/'>r/aws/comments/kqzq5q/ffmpeg_code_not_working_in_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp5546/integration_testing_for_api_gateway_and_dynamodb/'>r/aws/comments/kp5546/integration_testing_for_api_gateway_and_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv78df/which_aws_service_to_choose_lambda_or_ec2_with/'>r/aws/comments/kv78df/which_aws_service_to_choose_lambda_or_ec2_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kud3wh/amazon_student_account_with_ecr_and_docker/'>r/aws/comments/kud3wh/amazon_student_account_with_ecr_and_docker/</a></p>
</div>
<div label="nlb, 20" sentiment={0.13122023809523808}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7nf10/400_bad_request_nginx_on_ecs_fargate/'>r/aws/comments/l7nf10/400_bad_request_nginx_on_ecs_fargate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/'>r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwknn/how_to_break_sftp_and_web_apart_without_changing/'>r/aws/comments/kxwknn/how_to_break_sftp_and_web_apart_without_changing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/'>r/aws/comments/ksmltf/is_this_the_fastesteasiest_way_to_create_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/'>r/aws/comments/kszp77/a_question_regarding_cloudendure_operation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/'>r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l65ua7/cheapest_basic_security_setup/'>r/aws/comments/l65ua7/cheapest_basic_security_setup/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/'>r/aws/comments/ktn0sq/is_there_a_limit_to_shared_application_load/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ia8b/aws_networl_lb_direct_return_server/'>r/aws/comments/l6ia8b/aws_networl_lb_direct_return_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko1xin/private_eip_for_kubernetes_service/'>r/aws/comments/ko1xin/private_eip_for_kubernetes_service/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/'>r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/'>r/aws/comments/krvvgt/avoid_internet_gateway_when_requesting_public_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvqqtz/access_documentdb_without_ssh_tunneling/'>r/aws/comments/kvqqtz/access_documentdb_without_ssh_tunneling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo2cx/access_from_s3_frontend_to_backend_in_a_private/'>r/aws/comments/kpo2cx/access_from_s3_frontend_to_backend_in_a_private/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6thqs/https_with_eks_and_load_balancer/'>r/aws/comments/l6thqs/https_with_eks_and_load_balancer/</a></p>
</div>
<div label="azure, 20" sentiment={0.13827380952380952}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7gp3/beginner_training_for_cloudformation/'>r/aws/comments/ky7gp3/beginner_training_for_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/'>r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwv88f/aws_vs_azure_security_career/'>r/aws/comments/kwv88f/aws_vs_azure_security_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ia8b/aws_networl_lb_direct_return_server/'>r/aws/comments/l6ia8b/aws_networl_lb_direct_return_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/'>r/aws/comments/ko9lep/basics_of_iac_using_aws_and_azure_devops/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/'>r/aws/comments/kptrzb/does_aws_charge_if_i_keep_virtual/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/'>r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/</a></p>
</div>
<div label="iac, 20" sentiment={0.12303872053872056}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/'>r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7gp3/beginner_training_for_cloudformation/'>r/aws/comments/ky7gp3/beginner_training_for_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/'>r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/'>r/aws/comments/kugwji/what_can_i_do_on_my_own_account_to_help_me_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
</div>
<div label="ci, 19" sentiment={0.05738304093567251}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvpxg8/better_way_to_update_a_fleet_of_spot_instances/'>r/aws/comments/kvpxg8/better_way_to_update_a_fleet_of_spot_instances/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpo62y/need_guidance_on_approach_for_cicd_for_ecs_docker/'>r/aws/comments/kpo62y/need_guidance_on_approach_for_cicd_for_ecs_docker/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/'>r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/'>r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8dzgt/help_with_project_architecture/'>r/aws/comments/l8dzgt/help_with_project_architecture/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt7f05/order_of_deployment_for_shared_authorizer_across/'>r/aws/comments/kt7f05/order_of_deployment_for_shared_authorizer_across/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/'>r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks2l9q/how_should_rest_apis_communicate_in_a_serverless/'>r/aws/comments/ks2l9q/how_should_rest_apis_communicate_in_a_serverless/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/'>r/aws/comments/kry1ao/m6gdmedium_same_price_as_m6gmedium/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/'>r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/'>r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/'>r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/knwnn7/ami_stability/'>r/aws/comments/knwnn7/ami_stability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krv0ke/elasticbeanstalk_deploy_cli_command_exiting/'>r/aws/comments/krv0ke/elasticbeanstalk_deploy_cli_command_exiting/</a></p>
</div>
<div label="ec2, 18" sentiment={0.11053521324354658}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uhzl/do_aws_credits_accumulate_or_i_can_only_use/'>r/aws/comments/l7uhzl/do_aws_credits_accumulate_or_i_can_only_use/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4ush/from_this_guide_any_tips_for_ubuntu_aws_hardening/'>r/aws/comments/ko4ush/from_this_guide_any_tips_for_ubuntu_aws_hardening/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzw2e5/email_server_with_aws_lambda/'>r/aws/comments/kzw2e5/email_server_with_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/'>r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwdk5d/what_aws_services_do_i_need_for_the_following/'>r/aws/comments/kwdk5d/what_aws_services_do_i_need_for_the_following/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kunc86/customers_connect_to_ec2/'>r/aws/comments/kunc86/customers_connect_to_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7yvoi/trigger_lambda_to_start_an_ec2_instance_based_on/'>r/aws/comments/l7yvoi/trigger_lambda_to_start_an_ec2_instance_based_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/'>r/aws/comments/kp1uiv/is_it_possible_to_expand_the_root_directory_of_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/'>r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt3qlc/lambda_to_ec2_endpoint_issue/'>r/aws/comments/kt3qlc/lambda_to_ec2_endpoint_issue/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/'>r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/'>r/aws/comments/l4gcd8/how_to_use_aws_cli_with_okta/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr8m4x/only_allow_inbound_traffic_from_ec2/'>r/aws/comments/kr8m4x/only_allow_inbound_traffic_from_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfhcw/authorise_inbound_rules_to_my_instance_ssh_ip/'>r/aws/comments/kyfhcw/authorise_inbound_rules_to_my_instance_ssh_ip/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l57b0j/transfer_data_from_ec2_to_s3/'>r/aws/comments/l57b0j/transfer_data_from_ec2_to_s3/</a></p>
</div>
<div label="tgw, 18" sentiment={0.10640933140933141}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqw03g/transit_gateway_over_virtual_private_gateway/'>r/aws/comments/kqw03g/transit_gateway_over_virtual_private_gateway/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/'>r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l30uzn/aws_site_to_site_vpn_tgw_load_balancing_algorithm/'>r/aws/comments/l30uzn/aws_site_to_site_vpn_tgw_load_balancing_algorithm/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/'>r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0f70p/dx_gateway_with_transit_vif_vpn_options/'>r/aws/comments/l0f70p/dx_gateway_with_transit_vif_vpn_options/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2abyl/what_is_the_best_way_to_limit_outbound_traffic/'>r/aws/comments/l2abyl/what_is_the_best_way_to_limit_outbound_traffic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/'>r/aws/comments/kwefrh/how_to_save_inter_region_traffic_cost/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
</div>
<div label="nat, 18" sentiment={0.04074074074074074}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/'>r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/'>r/aws/comments/l0pyl5/multiaccount_with_aws_organization_vpn_server/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l51of0/connecting_ec2_instance_with_private_ip_without/'>r/aws/comments/l51of0/connecting_ec2_instance_with_private_ip_without/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzppu0/elasticache_on_aws_lambda/'>r/aws/comments/kzppu0/elasticache_on_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv54t2/transferring_elastic_ip_between_aws_accounts/'>r/aws/comments/kv54t2/transferring_elastic_ip_between_aws_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20h7t/using_palo_alto_ec2_instance_cannot_get_internet/'>r/aws/comments/l20h7t/using_palo_alto_ec2_instance_cannot_get_internet/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko868r/lambda_http_with_rds_postgres_safest_practices/'>r/aws/comments/ko868r/lambda_http_with_rds_postgres_safest_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzzhb/cannot_connect_to_instance/'>r/aws/comments/kqzzhb/cannot_connect_to_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/'>r/aws/comments/komh5t/can_i_run_emr_in_a_private_subnet_using_vpc/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/'>r/aws/comments/koqt72/extending_internet_access_in_vpc_peering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/iri6ra/downsides_of_web_servers_in_public_subnet_over/'>r/aws/comments/iri6ra/downsides_of_web_servers_in_public_subnet_over/</a></p>
</div>
<div label="cf, 18" sentiment={0.06026845839345839}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky7gp3/beginner_training_for_cloudformation/'>r/aws/comments/ky7gp3/beginner_training_for_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1lrx1/can_you_help_me/'>r/aws/comments/l1lrx1/can_you_help_me/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp8530/serverless_deployment/'>r/aws/comments/kp8530/serverless_deployment/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6otow/newb_question_help_with_s3_static_website/'>r/aws/comments/l6otow/newb_question_help_with_s3_static_website/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks089r/custom_subdomain_per_tenant_in_a_multitenant_b2b/'>r/aws/comments/ks089r/custom_subdomain_per_tenant_in_a_multitenant_b2b/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/'>r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/'>r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/'>r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1dan8/update_instance_type_in_cloudformation/'>r/aws/comments/l1dan8/update_instance_type_in_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks9a17/aws_control_tower_advice/'>r/aws/comments/ks9a17/aws_control_tower_advice/</a></p>
</div>
<div label="dynamo, 18" sentiment={0.031808862433862446}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2qwd2/latency_comparison_for_lambda_storage_backend/'>r/aws/comments/l2qwd2/latency_comparison_for_lambda_storage_backend/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1tfy4/suggestion_intergating_amazon_coginto_with_aws/'>r/aws/comments/l1tfy4/suggestion_intergating_amazon_coginto_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq8xq5/the_most_popular_databases_20062020_statistics/'>r/aws/comments/kq8xq5/the_most_popular_databases_20062020_statistics/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/i5wgz5/dynamodb_atomic_counter/'>r/aws/comments/i5wgz5/dynamodb_atomic_counter/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/'>r/aws/comments/l7gupc/question_how_to_monitor_terraform_state_changes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuuzsz/amplify_security_and_scability/'>r/aws/comments/kuuzsz/amplify_security_and_scability/</a></p>
</div>
<div label="building-command-table.main, 18" sentiment={-0.0462962962962963}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxkeek/aws_cli_in_windows_is_giving_blank_output/'>r/aws/comments/kxkeek/aws_cli_in_windows_is_giving_blank_output/</a></p>
</div>
<div label="k8s, 17" sentiment={0.10404379933791699}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7cbae/ecsalb_not_respecting_health_check_grace_period/'>r/aws/comments/l7cbae/ecsalb_not_respecting_health_check_grace_period/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/'>r/aws/comments/l6fxqq/understanding_aws_k8s_architecture_using_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktr6lg/multiregion_multistage_deployments/'>r/aws/comments/ktr6lg/multiregion_multistage_deployments/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/'>r/aws/comments/l03ld5/eks_using_existing_alb_with_aws_load_balancer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6thqs/https_with_eks_and_load_balancer/'>r/aws/comments/l6thqs/https_with_eks_and_load_balancer/</a></p>
</div>
<div label="asg, 17" sentiment={0.08405080213903743}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyjyrk/codedeploy_to_new_ec2_instances_launched_via_asg/'>r/aws/comments/kyjyrk/codedeploy_to_new_ec2_instances_launched_via_asg/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyjwfg/codedeploy_to_new_ec2_instances_launched_via_asg/'>r/aws/comments/kyjwfg/codedeploy_to_new_ec2_instances_launched_via_asg/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/'>r/aws/comments/l99ed6/whats_the_most_pain_point_you_dealtdealing_while/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzxrny/how_do_i_automate_the_process_of_patching_for/'>r/aws/comments/kzxrny/how_do_i_automate_the_process_of_patching_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/'>r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyipmh/codedeploy_to_new_ec2_instances_launched_via_asg/'>r/aws/comments/kyipmh/codedeploy_to_new_ec2_instances_launched_via_asg/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/'>r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/</a></p>
</div>
<div label="oss, 17" sentiment={0.17706582633053222}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krr6of/eks_anywhere_disaster_recovery/'>r/aws/comments/krr6of/eks_anywhere_disaster_recovery/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
</div>
<div label="sspl, 17" sentiment={0.06558229352346999}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/'>r/aws/comments/kxgthl/with_elastic_co_changing_licence_from_apache_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
</div>
<div label="kafka, 16" sentiment={0.08954613095238095}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/'>r/aws/comments/l7fx90/is_the_aws_platform_right_tool_for_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/'>r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jxhrln/kinesis_down/'>r/aws/comments/jxhrln/kinesis_down/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/'>r/aws/comments/kxx6cc/cloudwatch_logs_for_storing_user_usage_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvozye/aws_glue_streaming_etl_from_kafka/'>r/aws/comments/kvozye/aws_glue_streaming_etl_from_kafka/</a></p>
</div>
<div label="appsync, 16" sentiment={0.04434523809523809}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krez9h/displaying_last_value_from_iot_devices_in/'>r/aws/comments/krez9h/displaying_last_value_from_iot_devices_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/'>r/aws/comments/krct9a/using_open_source_libraries_instead_of_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7f2x1/preventing_sql_injection_with_appsync/'>r/aws/comments/l7f2x1/preventing_sql_injection_with_appsync/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv0d5k/appsync_lambda_authorization_resolver/'>r/aws/comments/kv0d5k/appsync_lambda_authorization_resolver/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/'>r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/</a></p>
</div>
<div label="dba, 16" sentiment={0.08653595102813852}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l95vpb/are_we_digging_our_own_grave/'>r/aws/comments/l95vpb/are_we_digging_our_own_grave/</a></p>
</div>
<div label="tls, 16" sentiment={0.05383522727272727}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvscph/ssl_certificates/'>r/aws/comments/kvscph/ssl_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/'>r/aws/comments/kxwgnn/someone_please_tell_me_the_appropriate_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/'>r/aws/comments/krhauq/https_do_i_need_a_load_balancer_or_to_redirect/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/'>r/aws/comments/l5o40a/other_than_compliance_and_its_best_practice_what/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/'>r/aws/comments/kzhmd4/how_does_tls_termination_work_when_you_have_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/'>r/aws/comments/l69b5c/how_dose_aws_manages_all_of_their_sdks/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6thqs/https_with_eks_and_load_balancer/'>r/aws/comments/l6thqs/https_with_eks_and_load_balancer/</a></p>
</div>
<div label="ddb, 16" sentiment={0.09888392857142858}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhaxa/dynamodb_ensuring_users_only_have_access_to_their/'>r/aws/comments/kzhaxa/dynamodb_ensuring_users_only_have_access_to_their/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/'>r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/'>r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuyyzq/dynamodb_how_do_i_optimize_dynamodbs_cost_more/'>r/aws/comments/kuyyzq/dynamodb_how_do_i_optimize_dynamodbs_cost_more/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l02ykd/help_aws_step_function_get_all_range_keys_with_a/'>r/aws/comments/l02ykd/help_aws_step_function_get_all_range_keys_with_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxqqvq/calling_one_microservice_from_another/'>r/aws/comments/kxqqvq/calling_one_microservice_from_another/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kypl4u/dynamodb_using_sort_key_with_scan/'>r/aws/comments/kypl4u/dynamodb_using_sort_key_with_scan/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/'>r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp5546/integration_testing_for_api_gateway_and_dynamodb/'>r/aws/comments/kp5546/integration_testing_for_api_gateway_and_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kntdcq/how_to_create_robinhood_using_dynamodb/'>r/aws/comments/kntdcq/how_to_create_robinhood_using_dynamodb/</a></p>
</div>
<div label="cdk, 16" sentiment={0.10700757575757577}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/'>r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kze8np/looking_for_ways_to_speed_up_deployments_with/'>r/aws/comments/kze8np/looking_for_ways_to_speed_up_deployments_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/'>r/aws/comments/kxjvh4/im_an_aws_newbie_if_i_totally_hose_an_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/'>r/aws/comments/kvbqna/i_wonder_if_aws_beginners_should_be_introduced_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/'>r/aws/comments/kyzzu7/level_of_coding_skill_required_for_aws_scripts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/'>r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/</a></p>
</div>
<div label="trump, 16" sentiment={-0.09454241071428572}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktlevw/amazon_is_hosting_parler/'>r/aws/comments/ktlevw/amazon_is_hosting_parler/</a></p>
</div>
<div label="waf, 15" sentiment={0.0584920634920635}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l65ua7/cheapest_basic_security_setup/'>r/aws/comments/l65ua7/cheapest_basic_security_setup/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4d6b3/socketio_on_waf/'>r/aws/comments/l4d6b3/socketio_on_waf/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pbpc/aws_cloud_security_project_capstone/'>r/aws/comments/l0pbpc/aws_cloud_security_project_capstone/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/'>r/aws/comments/kplr8m/can_aws_firewall_waf_be_used_for_external_servers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/'>r/aws/comments/kuujfj/how_to_make_elasticbeanstalk_site_secure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/'>r/aws/comments/kwmxie/aws_pricing_estimate_for_waf_multiple_domains/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwzm8g/aws_application_level_security_waf/'>r/aws/comments/kwzm8g/aws_application_level_security_waf/</a></p>
</div>
<div label="codebuild, 15" sentiment={0.05520202020202021}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp8530/serverless_deployment/'>r/aws/comments/kp8530/serverless_deployment/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/'>r/aws/comments/kmgov5/ondemand_selfhosted_aws_ec2_runner_for_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyz25m/aws_codecommit_and_codebuild_question/'>r/aws/comments/kyz25m/aws_codecommit_and_codebuild_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxvs89/codebuild_question_is_our_setup_nonstandard/'>r/aws/comments/kxvs89/codebuild_question_is_our_setup_nonstandard/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3t8yw/codebuild_codecommit_codepipeline_with_packer/'>r/aws/comments/l3t8yw/codebuild_codecommit_codepipeline_with_packer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/'>r/aws/comments/kqfa75/how_to_deploy_rds_with_pipelines_for_cicd/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/'>r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/</a></p>
</div>
<div label="ecr, 15" sentiment={-0.01920634920634921}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksdwmo/trouble_with_dockerrunawsjson/'>r/aws/comments/ksdwmo/trouble_with_dockerrunawsjson/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l20bsx/aws_ecs_task_boot_time/'>r/aws/comments/l20bsx/aws_ecs_task_boot_time/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztosg/best_way_to_install_pandas_and_bumpy_to_aws_lanbda/'>r/aws/comments/kztosg/best_way_to_install_pandas_and_bumpy_to_aws_lanbda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/'>r/aws/comments/kohb2u/tips_for_making_fargate_deployments_faster/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/'>r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx2aoz/nodejs_in_elastic_beanstalk/'>r/aws/comments/kx2aoz/nodejs_in_elastic_beanstalk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzyiv/ecs_running_images_vulnerability_information/'>r/aws/comments/kqzyiv/ecs_running_images_vulnerability_information/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jtk41e/lightsail_containers_an_easy_way_to_run_your/'>r/aws/comments/jtk41e/lightsail_containers_an_easy_way_to_run_your/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/k55z23/ive_found_how_to_create_the_new_lambda_container/'>r/aws/comments/k55z23/ive_found_how_to_create_the_new_lambda_container/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqhri9/lambda_container_images_long_cold_starts/'>r/aws/comments/kqhri9/lambda_container_images_long_cold_starts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kud3wh/amazon_student_account_with_ecr_and_docker/'>r/aws/comments/kud3wh/amazon_student_account_with_ecr_and_docker/</a></p>
</div>
<div label="microsoft, 14" sentiment={0.08653724747474749}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/'>r/aws/comments/l29gxq/aws_to_create_an_alv2licensed_fork_of/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/'>r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq8xq5/the_most_popular_databases_20062020_statistics/'>r/aws/comments/kq8xq5/the_most_popular_databases_20062020_statistics/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6eiwi/how_to_reuse_onprem_licensing_in_the_cloud/'>r/aws/comments/l6eiwi/how_to_reuse_onprem_licensing_in_the_cloud/</a></p>
</div>
<div label="https, 14" sentiment={-0.028452574211502785}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxwknn/how_to_break_sftp_and_web_apart_without_changing/'>r/aws/comments/kxwknn/how_to_break_sftp_and_web_apart_without_changing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/'>r/aws/comments/l3b2qt/deploy_sentry_through_cloudformation_using_only/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krrsfy/aws_cli_getcertificate/'>r/aws/comments/krrsfy/aws_cli_getcertificate/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxkeek/aws_cli_in_windows_is_giving_blank_output/'>r/aws/comments/kxkeek/aws_cli_in_windows_is_giving_blank_output/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kza6sg/problem_with_ec2_instance/'>r/aws/comments/kza6sg/problem_with_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/'>r/aws/comments/ks3kpb/is_there_a_benefit_to_using_cloudfront_if_my_user/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/'>r/aws/comments/l29j57/difficulty_with_google_domain_and_a_static_site/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6thqs/https_with_eks_and_load_balancer/'>r/aws/comments/l6thqs/https_with_eks_and_load_balancer/</a></p>
</div>
<div label="sso, 14" sentiment={0.03333333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/'>r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/'>r/aws/comments/krnz4i/adding_temporary_users_to_ec2_instance/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwhj9b/opensource_tool_for_cloud_credentials_management/'>r/aws/comments/kwhj9b/opensource_tool_for_cloud_credentials_management/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqpqh4/aws_vault_is_a_tool_to_securely_store_and_access/'>r/aws/comments/kqpqh4/aws_vault_is_a_tool_to_securely_store_and_access/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2acs2/aws_organizations_and_iam/'>r/aws/comments/l2acs2/aws_organizations_and_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6kj2c/do_i_lose_all_my_static_iam_usersroles_if_i/'>r/aws/comments/l6kj2c/do_i_lose_all_my_static_iam_usersroles_if_i/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/'>r/aws/comments/l69kgp/hosting_static_site_on_s3_behind_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx90dv/aws_sso_and_user_management_in_a_multiaccount/'>r/aws/comments/kx90dv/aws_sso_and_user_management_in_a_multiaccount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz9y5r/aws_single_signon_with_azuread_aws_account/'>r/aws/comments/kz9y5r/aws_single_signon_with_azuread_aws_account/</a></p>
</div>
<div label="redshift, 13" sentiment={0.017788461538461538}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l4q6sw/redshift_query_latency_on_interactive_dashboard/'>r/aws/comments/l4q6sw/redshift_query_latency_on_interactive_dashboard/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2kve7/filtering_and_reporting_on_big_data_interactively/'>r/aws/comments/l2kve7/filtering_and_reporting_on_big_data_interactively/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gtvb/how_to_implement_row_level_security_in_redshift/'>r/aws/comments/l7gtvb/how_to_implement_row_level_security_in_redshift/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l53vgf/optimizing_joins_in_redshift/'>r/aws/comments/l53vgf/optimizing_joins_in_redshift/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3v35i/how_to_null_values_in_redshift/'>r/aws/comments/l3v35i/how_to_null_values_in_redshift/</a></p>
</div>
<div label="glue, 13" sentiment={0.14615384615384613}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1cd4c/aws_glue_tutorial/'>r/aws/comments/l1cd4c/aws_glue_tutorial/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/'>r/aws/comments/kuvt6x/how_does_s3_work_under_the_hood/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6udxy/glue_schema_registry_on_python/'>r/aws/comments/l6udxy/glue_schema_registry_on_python/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/'>r/aws/comments/kpaha7/what_are_my_options_for_processing_s3_data_in_bulk/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l76bzu/suggestions_needed_on_how_to_store_data_in_an/'>r/aws/comments/l76bzu/suggestions_needed_on_how_to_store_data_in_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvozye/aws_glue_streaming_etl_from_kafka/'>r/aws/comments/kvozye/aws_glue_streaming_etl_from_kafka/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/'>r/aws/comments/kqzuew/do_you_bundle_cdkcloudformation_in_your/</a></p>
</div>
<div label="eu, 13" sentiment={0.022275641025641033}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpcyzu/question_about_closing_account/'>r/aws/comments/kpcyzu/question_about_closing_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1b8sz/best_region_for_getting_data_out_from_china_as/'>r/aws/comments/l1b8sz/best_region_for_getting_data_out_from_china_as/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l42fpo/cloudwatch_charges/'>r/aws/comments/l42fpo/cloudwatch_charges/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq74mq/any_info_on_when_mac_ec2_instances_will_be/'>r/aws/comments/kq74mq/any_info_on_when_mac_ec2_instances_will_be/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
</div>
<div label="aws lambda, 13" sentiment={0.03774725274725274}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/'>r/aws/comments/l5r8hk/aws_dev_hour_building_modern_application_an_8/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvfec9/does_s3_work_for_this_requirement/'>r/aws/comments/kvfec9/does_s3_work_for_this_requirement/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l96rve/how_should_a_beginner_start_with_aws_lambda_with/'>r/aws/comments/l96rve/how_should_a_beginner_start_with_aws_lambda_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz8hzj/the_aws_resources_tab_in_cloud9_is_not_showing/'>r/aws/comments/kz8hzj/the_aws_resources_tab_in_cloud9_is_not_showing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kun4x8/aws_lambda_function_using_a_container_image/'>r/aws/comments/kun4x8/aws_lambda_function_using_a_container_image/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kppt1o/python_script_runs_fine_from_computer_but_not_on/'>r/aws/comments/kppt1o/python_script_runs_fine_from_computer_but_not_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzppu0/elasticache_on_aws_lambda/'>r/aws/comments/kzppu0/elasticache_on_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqzq5q/ffmpeg_code_not_working_in_aws_lambda/'>r/aws/comments/kqzq5q/ffmpeg_code_not_working_in_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/'>r/aws/comments/l7w9xb/aws_lambda_to_work_around_s3cloudfront_rough_edge/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/'>r/aws/comments/kz83xg/customizing_aws_ami_lookup_lambda/</a></p>
</div>
<div label="apache, 13" sentiment={-0.027972027972027972}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/'>r/aws/comments/krefmj/stuck_creating_2nd_instance_of_wordpress_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/'>r/aws/comments/kqe1xo/week_of_jan_4th_what_are_you_building_on_aws_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/'>r/aws/comments/l0bake/reached_a_dead_end_cannot_access_repositories_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2af8p/aws_response_to_elastic_blog/'>r/aws/comments/l2af8p/aws_response_to_elastic_blog/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks7tyt/how_to_test_capacity_of_an_ec2_instance/'>r/aws/comments/ks7tyt/how_to_test_capacity_of_an_ec2_instance/</a></p>
</div>
<div label="gsi, 13" sentiment={0.12205128205128207}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krz4ze/dynamodb_multiplayer_game_tutorial_doesnt_factor/'>r/aws/comments/krz4ze/dynamodb_multiplayer_game_tutorial_doesnt_factor/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhaxa/dynamodb_ensuring_users_only_have_access_to_their/'>r/aws/comments/kzhaxa/dynamodb_ensuring_users_only_have_access_to_their/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9cw5e/query_a_date_gsi_using_2_dates/'>r/aws/comments/l9cw5e/query_a_date_gsi_using_2_dates/</a></p>
</div>
<div label="elb, 13" sentiment={0.03408555729984302}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvscph/ssl_certificates/'>r/aws/comments/kvscph/ssl_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/'>r/aws/comments/l2nqen/configure_openvpn_server_behind_alb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/'>r/aws/comments/kmjs3i/what_is_the_well_architected_way_to_handle/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krba2f/recommended_auto_scale_triggers/'>r/aws/comments/krba2f/recommended_auto_scale_triggers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/'>r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/'>r/aws/comments/krzhmt/deploying_a_simple_react_app_on_ec2_not_working/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/'>r/aws/comments/ks94ne/configure_amazon_ec2_instance_to_use_ssl/</a></p>
</div>
<div label="aws organizations, 12" sentiment={0.04479166666666667}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/'>r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/'>r/aws/comments/kpddvg/is_there_a_real_limit_to_how_many_dynamodb_tables/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/'>r/aws/comments/l362qg/is_there_a_tool_for_limiting_aws_spending/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7h26u/question_is_there_a_way_to_view_member_account/'>r/aws/comments/l7h26u/question_is_there_a_way_to_view_member_account/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9k9xp/security_kpi_on_aws/'>r/aws/comments/l9k9xp/security_kpi_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwkmdt/disable_or_read_only_for_root_account_for_an/'>r/aws/comments/kwkmdt/disable_or_read_only_for_root_account_for_an/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/'>r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/'>r/aws/comments/l0piyl/i_am_going_to_be_adding_someone_to_my_aws_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6qwnf/is_it_possible_to_get_support_only_when_needed/'>r/aws/comments/l6qwnf/is_it_possible_to_get_support_only_when_needed/</a></p>
</div>
<div label="lambda, 12" sentiment={-0.07612012987012988}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktut7f/how_to_automate_uploading_data_into_s3_bucket/'>r/aws/comments/ktut7f/how_to_automate_uploading_data_into_s3_bucket/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kztafe/selenium_cold_start_of_aspnet_website_and_lambdas/'>r/aws/comments/kztafe/selenium_cold_start_of_aspnet_website_and_lambdas/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/'>r/aws/comments/kp7u17/create_sns_policy_to_allow_any_iam_role_in_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/'>r/aws/comments/koxy0a/zero_knowledge_of_multiple_accountscross_accounts/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzhxmi/best_way_to_implement_binary_autoscaling_for_once/'>r/aws/comments/kzhxmi/best_way_to_implement_binary_autoscaling_for_once/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/'>r/aws/comments/l6301r/how_many_times_lambda_will_be_triggered_by_s3/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3pixo/throttling_step_functions/'>r/aws/comments/l3pixo/throttling_step_functions/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kr10m6/how_can_i_use_django_on_the_backend_with_aws/'>r/aws/comments/kr10m6/how_can_i_use_django_on_the_backend_with_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/'>r/aws/comments/kv1rbp/how_to_handle_spikes_with_sqs_lambda_ses/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/'>r/aws/comments/kz05i1/lambda_passing_an_input_param_into_a_python_script/</a></p>
</div>
<div label="elasticache, 12" sentiment={0.1076388888888889}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/'>r/aws/comments/kyfy1z/lambda_at_scale_sync_request_throttling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqpwsm/aws_lambda_question_on_concurrency_scaling/'>r/aws/comments/kqpwsm/aws_lambda_question_on_concurrency_scaling/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksjbux/hypothetically_if_i_have_2_million_records_in_a/'>r/aws/comments/ksjbux/hypothetically_if_i_have_2_million_records_in_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzppu0/elasticache_on_aws_lambda/'>r/aws/comments/kzppu0/elasticache_on_aws_lambda/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/'>r/aws/comments/kyp6qi/my_website_constantly_needs_to_query_my_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7ooak/using_dynamodb_as_cache/'>r/aws/comments/l7ooak/using_dynamodb_as_cache/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/'>r/aws/comments/kx4l15/is_there_a_scalable_websocketrealtime_solution_in/</a></p>
</div>
<div label="facebook, 12" sentiment={0.009722222222222222}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw0zk7/serverless_user_authentication/'>r/aws/comments/kw0zk7/serverless_user_authentication/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzqz87/auth_service_for_mobile_application/'>r/aws/comments/kzqz87/auth_service_for_mobile_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/'>r/aws/comments/l7gw9r/amazon_ses_they_keep_declining_my_request_to/</a></p>
</div>
<div label="kms, 12" sentiment={0.07187500000000001}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwtquj/costeffective_s3_for_subscription_data/'>r/aws/comments/kwtquj/costeffective_s3_for_subscription_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwnaza/aws_security_with_infosec_experience/'>r/aws/comments/kwnaza/aws_security_with_infosec_experience/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1eryd/immediate_impact_of_s3_encryption/'>r/aws/comments/l1eryd/immediate_impact_of_s3_encryption/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko05gd/thoughts_on_using_encrypted_parameter_store_or/'>r/aws/comments/ko05gd/thoughts_on_using_encrypted_parameter_store_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/'>r/aws/comments/krl0gq/transfer_software_for_large_file_sizes/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/'>r/aws/comments/l66zff/restore_aurora_db_cluster_from_s3_not_working/</a></p>
</div>
<div label="efs, 12" sentiment={0.014880952380952384}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/'>r/aws/comments/l01lag/are_there_any_decent_templates_out_there_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwt143/raid_1_question/'>r/aws/comments/kwt143/raid_1_question/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/'>r/aws/comments/kv5i7b/ecs_pricing_all_containers_in_1_task/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/'>r/aws/comments/l1r262/lambda_max_execution_limit_increase_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/'>r/aws/comments/kwwulz/what_toolsservices_to_i_need_to_deploy_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/'>r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwibz8/efs_access_point_vs_mount_target/'>r/aws/comments/kwibz8/efs_access_point_vs_mount_target/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/'>r/aws/comments/kw27tj/can_amazon_access_and_view_my_companys_data_thats/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxnuhs/cross_region_efs_sharing/'>r/aws/comments/kxnuhs/cross_region_efs_sharing/</a></p>
</div>
<div label="tf, 12" sentiment={-0.009821428571428573}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kweewy/moving_terraform_deployment_to/'>r/aws/comments/kweewy/moving_terraform_deployment_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/'>r/aws/comments/kv9cif/cloudformation_now_has_more_resource_types_than/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/'>r/aws/comments/l6rziq/pull_in_vpc_and_subnet_ids_via_cloudformation/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/'>r/aws/comments/kt4isl/scale_your_cloudformation_success_tactics_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/'>r/aws/comments/l1sr8y/s3_trigger_lambda_not_working_with_efs_mount/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/'>r/aws/comments/l2cpv7/how_to_pass_frontend_web_parameters_to_terraform/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l13us1/automating_software_installation_on_ec2_creation/'>r/aws/comments/l13us1/automating_software_installation_on_ec2_creation/</a></p>
</div>
<div label="porter, 12" sentiment={-0.04152777777777778}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/'>r/aws/comments/l6ka3e/new_open_source_project_use_aws_like_its_heroku/</a></p>
</div>
<div label="appstream, 11" sentiment={0.145439787485242}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvuy5z/appstream_created_with_root_user_shared_with_iam/'>r/aws/comments/kvuy5z/appstream_created_with_root_user_shared_with_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/'>r/aws/comments/kzlmd8/is_there_a_workspaces_pricing_tool_similar_to_the/</a></p>
</div>
<div label="python, 11" sentiment={0.04107142857142857}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/'>r/aws/comments/l8br3g/extremely_dumb_question_whats_the_proper_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyrh12/web_app_with_elastic_beanstalk_failing/'>r/aws/comments/kyrh12/web_app_with_elastic_beanstalk_failing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/'>r/aws/comments/l6t9iq/aws_cdk_never_write_cloudformation_again/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/'>r/aws/comments/kygbaj/updating_code_of_an_serverless_function_running/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/'>r/aws/comments/l7uz5j/why_is_the_aws_devops_engineer_professional_cert/</a></p>
</div>
<div label="elastic beanstalk, 10" sentiment={-0.04055555555555557}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksdwmo/trouble_with_dockerrunawsjson/'>r/aws/comments/ksdwmo/trouble_with_dockerrunawsjson/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/krm1c7/connection_to_remote_soap_service_works_on_my/'>r/aws/comments/krm1c7/connection_to_remote_soap_service_works_on_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/'>r/aws/comments/ksilxq/why_do_we_still_need_to_build_reverse_proxy_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l9akpz/better_alternatives_to_ec2/'>r/aws/comments/l9akpz/better_alternatives_to_ec2/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l67zvg/the_easiest_way_to_change_vpc_of_an_existing/'>r/aws/comments/l67zvg/the_easiest_way_to_change_vpc_of_an_existing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxi1jf/rollback_secuirty_group_to_previous_state/'>r/aws/comments/kxi1jf/rollback_secuirty_group_to_previous_state/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kwi6dc/cant_connect_my_elastic_beanstalk_app_to_my_rds/'>r/aws/comments/kwi6dc/cant_connect_my_elastic_beanstalk_app_to_my_rds/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kszhd4/create_a_deployment_setup_on_aws_in_10_minutes/'>r/aws/comments/kszhd4/create_a_deployment_setup_on_aws_in_10_minutes/</a></p>
</div>
<div label="grafana, 10" sentiment={-0.023076923076923078}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/'>r/aws/comments/ko4jt3/whats_your_aws_new_years_resolution/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/'>r/aws/comments/l0pf63/amazon_not_ok_why_we_had_to_change_elastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l60uhm/ebs_announces_1minute_metrics_for_all_volume_types/'>r/aws/comments/l60uhm/ebs_announces_1minute_metrics_for_all_volume_types/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/jswboh/amazon_workspace_employee_monitoring/'>r/aws/comments/jswboh/amazon_workspace_employee_monitoring/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktfv06/how_to_best_provide_metrics_from_ecs_application/'>r/aws/comments/ktfv06/how_to_best_provide_metrics_from_ecs_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l6dsj2/amazon_managed_grafana_service_what_it_is_how_to/'>r/aws/comments/l6dsj2/amazon_managed_grafana_service_what_it_is_how_to/</a></p>
</div>
<div label="reddit, 10" sentiment={0.003957070707070698}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/'>r/aws/comments/ku5lco/amazon_suspended_parler_from_its_web_hosting/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/komi83/aws_certificate_manager_validation_with_google/'>r/aws/comments/komi83/aws_certificate_manager_validation_with_google/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ko3b9h/introducing_raltstreetbets/'>r/aws/comments/ko3b9h/introducing_raltstreetbets/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/'>r/aws/comments/kqbctu/ecs_container_deployments_hands_down_the_absolute/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktqsuy/parler_runs_on_aws/'>r/aws/comments/ktqsuy/parler_runs_on_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kz9d1l/greenfield_aws_basic_questions/'>r/aws/comments/kz9d1l/greenfield_aws_basic_questions/</a></p>
</div>
<div label="controltower, 10" sentiment={0.14434433621933623}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/'>r/aws/comments/kq6inn/in_aws_sagemaker_or_in_general_is_there_a_way_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kxxajr/aws_sandbox_accounts_for_users_like_in_linux/'>r/aws/comments/kxxajr/aws_sandbox_accounts_for_users_like_in_linux/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2acs2/aws_organizations_and_iam/'>r/aws/comments/l2acs2/aws_organizations_and_iam/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/'>r/aws/comments/l7e00e/you_can_now_bring_existing_aws_organizations_ous/</a></p>
</div>
<div label="youtube, 10" sentiment={0.35500000000000004}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvscph/ssl_certificates/'>r/aws/comments/kvscph/ssl_certificates/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l3lls5/is_serverless_taking_over/'>r/aws/comments/l3lls5/is_serverless_taking_over/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7rfhw/how_to_prepare_for_aws_interview/'>r/aws/comments/l7rfhw/how_to_prepare_for_aws_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l39udk/cognito_looking_for_help_locating_a_really_good/'>r/aws/comments/l39udk/cognito_looking_for_help_locating_a_really_good/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/'>r/aws/comments/kuv9mq/hosting_private_videos_that_cant_be_downloaded_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/'>r/aws/comments/l2r1uz/we_are_the_aws_cdk_team_ask_the_experts_jan_27th/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ksxes3/aws_learning_path/'>r/aws/comments/ksxes3/aws_learning_path/</a></p>
</div>
<div label="dms, 9" sentiment={0.0004629629629629613}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7lb58/what_is_the_difference_between_aws_dms_and/'>r/aws/comments/l7lb58/what_is_the_difference_between_aws_dms_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/'>r/aws/comments/kum3vl/need_to_upgrade_our_rds_mysql_instances_from_55/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kvvdzr/database_migration_service_question/'>r/aws/comments/kvvdzr/database_migration_service_question/</a></p>
</div>
<div label="gui, 9" sentiment={0.10718855218855217}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/'>r/aws/comments/l00pmg/aws_is_creating_a_new_open_source_design_system/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l36q3t/confused_by_concept/'>r/aws/comments/l36q3t/confused_by_concept/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/'>r/aws/comments/kohogi/can_i_upload_my_personal_files_and_photos_into/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/'>r/aws/comments/kuzrxg/questions_for_setting_up_dynamodb/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzus60/using_s3_for_storing_and_distributing_files_for_a/'>r/aws/comments/kzus60/using_s3_for_storing_and_distributing_files_for_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kufkh6/a_new_version_of_dynamodb_gui_client/'>r/aws/comments/kufkh6/a_new_version_of_dynamodb_gui_client/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/'>r/aws/comments/l07b4t/using_aws_as_a_cloud_backup_for_my_home_office/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/'>r/aws/comments/kyv1iq/ok_i_think_ive_finally_got_somewhat_of_a_handle/</a></p>
</div>
<div label="beanstalk, 9" sentiment={-0.01944444444444444}>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/'>r/aws/comments/kv5mer/herokulike_solution_for_aws_besides_ellastic/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/'>r/aws/comments/ky40xx/how_much_aws_do_i_actually_need_to_know_for_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/'>r/aws/comments/l7loz4/amplify_vs_beanstalk_vs_ecs/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kzy9ff/getting_an_access_denied_error_when_trying_to/'>r/aws/comments/kzy9ff/getting_an_access_denied_error_when_trying_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/kp6veg/amplify_procons/'>r/aws/comments/kp6veg/amplify_procons/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/'>r/aws/comments/ktzbjm/codebuild_status_check_details_to_github/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/aws/comments/l0d06g/http_only_cookies_in_aws/'>r/aws/comments/l0d06g/http_only_cookies_in_aws/</a></p>
</div>
          </Accordion>
          </div>

          <div className={styles.accordionColumn}><p><a target="_blank" href="https://www.reddit.com/r/dataengineering/">reddit: r/dataengineering</a></p>
        <Accordion >
        <div label="de, 121" sentiment={0.1282171255053486}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/'>r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/k3k5qr/do_faang_de_interviews_even_ask_about_big_data/'>r/dataengineering/comments/k3k5qr/do_faang_de_interviews_even_ask_about_big_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kue2au/from_data_engineering_to_cloud_engineering/'>r/dataengineering/comments/kue2au/from_data_engineering_to_cloud_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/'>r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ku4o1i/coming_from_de_intern_healthcare_hl7_standards_in/'>r/dataengineering/comments/ku4o1i/coming_from_de_intern_healthcare_hl7_standards_in/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ko0mr2/not_sure_where_to_go_with_my_career/'>r/dataengineering/comments/ko0mr2/not_sure_where_to_go_with_my_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4wg0n/im_15_years_into_de_and_i_still_feel_like_i_know/'>r/dataengineering/comments/l4wg0n/im_15_years_into_de_and_i_still_feel_like_i_know/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2khmf/is_anybody_on_their_own_road_to_become_a_data/'>r/dataengineering/comments/l2khmf/is_anybody_on_their_own_road_to_become_a_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4zbjj/blogging_to_showcase_projects/'>r/dataengineering/comments/l4zbjj/blogging_to_showcase_projects/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kn5a53/do_i_have_what_it_takes_to_become_a_de/'>r/dataengineering/comments/kn5a53/do_i_have_what_it_takes_to_become_a_de/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksr9r6/masters_to_focus_on_de/'>r/dataengineering/comments/ksr9r6/masters_to_focus_on_de/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9gbfx/facebook_onsite_interview/'>r/dataengineering/comments/l9gbfx/facebook_onsite_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/'>r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1ssk1/is_de_a_job_you_can_do_in_your_old_age/'>r/dataengineering/comments/l1ssk1/is_de_a_job_you_can_do_in_your_old_age/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz0bs2/current_de_anyone_ever_done_a_ml_20_project/'>r/dataengineering/comments/kz0bs2/current_de_anyone_ever_done_a_ml_20_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1se0x/my_company_is_willing_to_pay_someone_to_hang_with/'>r/dataengineering/comments/l1se0x/my_company_is_willing_to_pay_someone_to_hang_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/'>r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kuk95n/looking_for_feedback_on_another_de_project/'>r/dataengineering/comments/kuk95n/looking_for_feedback_on_another_de_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/'>r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/</a></p>
</div>
<div label="sql, 85" sentiment={0.11356816059757235}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/'>r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/k3k5qr/do_faang_de_interviews_even_ask_about_big_data/'>r/dataengineering/comments/k3k5qr/do_faang_de_interviews_even_ask_about_big_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/'>r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktvcl8/which_role_requires_sql_skill_as_their_core/'>r/dataengineering/comments/ktvcl8/which_role_requires_sql_skill_as_their_core/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0k2ty/what_python_library_or_libraries_can_i_use_to/'>r/dataengineering/comments/l0k2ty/what_python_library_or_libraries_can_i_use_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0rfj8/where_to_practice_hard_sql_problems/'>r/dataengineering/comments/l0rfj8/where_to_practice_hard_sql_problems/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ko0mr2/not_sure_where_to_go_with_my_career/'>r/dataengineering/comments/ko0mr2/not_sure_where_to_go_with_my_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4wg0n/im_15_years_into_de_and_i_still_feel_like_i_know/'>r/dataengineering/comments/l4wg0n/im_15_years_into_de_and_i_still_feel_like_i_know/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0m6j9/project_structure_and_best_practices_for/'>r/dataengineering/comments/l0m6j9/project_structure_and_best_practices_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8lah1/nosql_vs_sql/'>r/dataengineering/comments/l8lah1/nosql_vs_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l86zta/is_there_an_easy_environment_for_me_to_test_my/'>r/dataengineering/comments/l86zta/is_there_an_easy_environment_for_me_to_test_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4y83m/tech_stack/'>r/dataengineering/comments/l4y83m/tech_stack/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx5vw0/dw_as_a_source_to_etl/'>r/dataengineering/comments/kx5vw0/dw_as_a_source_to_etl/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kq521y/sql_server_hashpartitioned_parallel_data/'>r/dataengineering/comments/kq521y/sql_server_hashpartitioned_parallel_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/'>r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kn5a53/do_i_have_what_it_takes_to_become_a_de/'>r/dataengineering/comments/kn5a53/do_i_have_what_it_takes_to_become_a_de/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kth30n/data_engineering_slack_channels/'>r/dataengineering/comments/kth30n/data_engineering_slack_channels/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/'>r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/khr8g6/is_there_any_shot_for_someone_without_a_degree/'>r/dataengineering/comments/khr8g6/is_there_any_shot_for_someone_without_a_degree/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/'>r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7a790/i_accidentally_got_an_technical_interview/'>r/dataengineering/comments/l7a790/i_accidentally_got_an_technical_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l07wzb/any_tips_on_design_patterns_to_follow_when/'>r/dataengineering/comments/l07wzb/any_tips_on_design_patterns_to_follow_when/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp58u9/uncertainty_in_nosql_vs_sql/'>r/dataengineering/comments/kp58u9/uncertainty_in_nosql_vs_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9anov/building_a_personal_data_warehouse_in_snowflake/'>r/dataengineering/comments/l9anov/building_a_personal_data_warehouse_in_snowflake/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6dj9t/data_engineering_books_for_beginers/'>r/dataengineering/comments/l6dj9t/data_engineering_books_for_beginers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/'>r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/</a></p>
</div>
<div label="etl, 79" sentiment={0.08895786000216382}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/'>r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/'>r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/'>r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/'>r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxfydi/best_airflow_design_patterns_for_extracting_200/'>r/dataengineering/comments/kxfydi/best_airflow_design_patterns_for_extracting_200/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9gbfx/facebook_onsite_interview/'>r/dataengineering/comments/l9gbfx/facebook_onsite_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/'>r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/'>r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/'>r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/'>r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz0bs2/current_de_anyone_ever_done_a_ml_20_project/'>r/dataengineering/comments/kz0bs2/current_de_anyone_ever_done_a_ml_20_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6vn6e/question_airflow_subdag/'>r/dataengineering/comments/l6vn6e/question_airflow_subdag/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l66ek4/7_data_engineering_evangelists_to_follow/'>r/dataengineering/comments/l66ek4/7_data_engineering_evangelists_to_follow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/'>r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l07wzb/any_tips_on_design_patterns_to_follow_when/'>r/dataengineering/comments/l07wzb/any_tips_on_design_patterns_to_follow_when/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8eviq/whats_the_difference_between_a_software_engineer/'>r/dataengineering/comments/l8eviq/whats_the_difference_between_a_software_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp92i1/slisloslas_for_pipelines/'>r/dataengineering/comments/kp92i1/slisloslas_for_pipelines/</a></p>
</div>
<div label="aws, 45" sentiment={0.12396499796499795}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5e4zt/aws_python_lambda_csv_cleanup/'>r/dataengineering/comments/l5e4zt/aws_python_lambda_csv_cleanup/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/'>r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kue2au/from_data_engineering_to_cloud_engineering/'>r/dataengineering/comments/kue2au/from_data_engineering_to_cloud_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2noa4/data_engineer_interview_at_amazon/'>r/dataengineering/comments/l2noa4/data_engineer_interview_at_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxfydi/best_airflow_design_patterns_for_extracting_200/'>r/dataengineering/comments/kxfydi/best_airflow_design_patterns_for_extracting_200/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4y83m/tech_stack/'>r/dataengineering/comments/l4y83m/tech_stack/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6l0lm/exploratory_project_looking_for_input/'>r/dataengineering/comments/l6l0lm/exploratory_project_looking_for_input/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ku2i65/how_much_have_certs_helped_in_your_career/'>r/dataengineering/comments/ku2i65/how_much_have_certs_helped_in_your_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/'>r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/'>r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/'>r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/'>r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9p2ef/selecting_azuresynapse_over_aws/'>r/dataengineering/comments/l9p2ef/selecting_azuresynapse_over_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/'>r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/'>r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
</div>
<div label="kafka, 29" sentiment={0.0394875478927203}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kte0q1/how_do_you_deal_with_this_issue/'>r/dataengineering/comments/kte0q1/how_do_you_deal_with_this_issue/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxtxym/real_life_data_streaming/'>r/dataengineering/comments/kxtxym/real_life_data_streaming/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l53wql/hot_take_you_probably_dont_need_high_availability/'>r/dataengineering/comments/l53wql/hot_take_you_probably_dont_need_high_availability/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1gaue/for_those_folks_working_with_apache_kafka_this/'>r/dataengineering/comments/l1gaue/for_those_folks_working_with_apache_kafka_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6gnu3/building_a_data_lake_from_batch_to_realtime_using/'>r/dataengineering/comments/l6gnu3/building_a_data_lake_from_batch_to_realtime_using/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/'>r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/'>r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/'>r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxeo3g/interview_prep_big_data_patterns_what_does_this/'>r/dataengineering/comments/kxeo3g/interview_prep_big_data_patterns_what_does_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/krqgpq/open_beta_kafka_ide_2020125_available_from_today/'>r/dataengineering/comments/krqgpq/open_beta_kafka_ide_2020125_available_from_today/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kth30n/data_engineering_slack_channels/'>r/dataengineering/comments/kth30n/data_engineering_slack_channels/</a></p>
</div>
<div label="mle, 28" sentiment={0.06933106575963718}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/'>r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/</a></p>
</div>
<div label="s3, 22" sentiment={0.04658049021685386}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/'>r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/'>r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/'>r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
</div>
<div label="data engineering, 21" sentiment={0.17191300762729336}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7yxp7/how_to_be_a_data_engineer/'>r/dataengineering/comments/l7yxp7/how_to_be_a_data_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/'>r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4976k/developers_who_have_or_are_wanting_to_become_data/'>r/dataengineering/comments/l4976k/developers_who_have_or_are_wanting_to_become_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/irguks/from_data_engineering_to_software_engineering_or/'>r/dataengineering/comments/irguks/from_data_engineering_to_software_engineering_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksfdxk/python_and_apache_parquet_yes_please/'>r/dataengineering/comments/ksfdxk/python_and_apache_parquet_yes_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/'>r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l010k7/new_chapter_of_my_data_engineering_book/'>r/dataengineering/comments/l010k7/new_chapter_of_my_data_engineering_book/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx3a3p/i_need_some_guidance_for_a_school_project/'>r/dataengineering/comments/kx3a3p/i_need_some_guidance_for_a_school_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/'>r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kzczf3/moving_career_to_data_engineering/'>r/dataengineering/comments/kzczf3/moving_career_to_data_engineering/</a></p>
</div>
<div label="data engineer, 21" sentiment={0.11072150072150072}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0lv75/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0lv75/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7yxp7/how_to_be_a_data_engineer/'>r/dataengineering/comments/l7yxp7/how_to_be_a_data_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4976k/developers_who_have_or_are_wanting_to_become_data/'>r/dataengineering/comments/l4976k/developers_who_have_or_are_wanting_to_become_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/irguks/from_data_engineering_to_software_engineering_or/'>r/dataengineering/comments/irguks/from_data_engineering_to_software_engineering_or/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kshzx1/data_scientist_vs_data_engineer_vs_data_analyst/'>r/dataengineering/comments/kshzx1/data_scientist_vs_data_engineer_vs_data_analyst/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/'>r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kzpttp/data_analyst_to_data_engineer/'>r/dataengineering/comments/kzpttp/data_analyst_to_data_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kztwwo/need_help/'>r/dataengineering/comments/kztwwo/need_help/</a></p>
</div>
<div label="python, 19" sentiment={0.12389306599832911}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/km0roj/career_guidance_senior_etl_engineer/'>r/dataengineering/comments/km0roj/career_guidance_senior_etl_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksfdxk/python_and_apache_parquet_yes_please/'>r/dataengineering/comments/ksfdxk/python_and_apache_parquet_yes_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4y83m/tech_stack/'>r/dataengineering/comments/l4y83m/tech_stack/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/khr8g6/is_there_any_shot_for_someone_without_a_degree/'>r/dataengineering/comments/khr8g6/is_there_any_shot_for_someone_without_a_degree/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8k65b/is_a_masters_in_data_engineering_required/'>r/dataengineering/comments/l8k65b/is_a_masters_in_data_engineering_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9kf2n/data_preprocessing_with_numpy_this_course_will/'>r/dataengineering/comments/l9kf2n/data_preprocessing_with_numpy_this_course_will/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02iff/ideas_for_data_science_app/'>r/dataengineering/comments/l02iff/ideas_for_data_science_app/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0m6j9/project_structure_and_best_practices_for/'>r/dataengineering/comments/l0m6j9/project_structure_and_best_practices_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/'>r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/</a></p>
</div>
<div label="spark, 18" sentiment={0.15128637566137568}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6dj9t/data_engineering_books_for_beginers/'>r/dataengineering/comments/l6dj9t/data_engineering_books_for_beginers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/'>r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l680eu/spark_interview_prep_what_to_focus_on/'>r/dataengineering/comments/l680eu/spark_interview_prep_what_to_focus_on/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/'>r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxeo3g/interview_prep_big_data_patterns_what_does_this/'>r/dataengineering/comments/kxeo3g/interview_prep_big_data_patterns_what_does_this/</a></p>
</div>
<div label="ml, 17" sentiment={0.18900772430184198}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz0bs2/current_de_anyone_ever_done_a_ml_20_project/'>r/dataengineering/comments/kz0bs2/current_de_anyone_ever_done_a_ml_20_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6rtlf/from_hadoop_data_engineer_to_data_scientist/'>r/dataengineering/comments/l6rtlf/from_hadoop_data_engineer_to_data_scientist/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/'>r/dataengineering/comments/kmud9p/what_is_the_responsibilities_difference_between/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt8t2q/we_built_a_multicolumn_fuzzy_merge_tool_for/'>r/dataengineering/comments/kt8t2q/we_built_a_multicolumn_fuzzy_merge_tool_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/'>r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/</a></p>
</div>
<div label="redshift, 17" sentiment={0.022776610644257702}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/'>r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/'>r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/'>r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
</div>
<div label="dbt, 17" sentiment={0.03294817927170868}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/'>r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
</div>
<div label="cs, 15" sentiment={0.1734722222222222}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksr9r6/masters_to_focus_on_de/'>r/dataengineering/comments/ksr9r6/masters_to_focus_on_de/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2khmf/is_anybody_on_their_own_road_to_become_a_data/'>r/dataengineering/comments/l2khmf/is_anybody_on_their_own_road_to_become_a_data/</a></p>
</div>
<div label="amazon, 15" sentiment={0.03866666666666666}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l62cke/need_help_data_engineering/'>r/dataengineering/comments/l62cke/need_help_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/'>r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2noa4/data_engineer_interview_at_amazon/'>r/dataengineering/comments/l2noa4/data_engineer_interview_at_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/'>r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwxahg/ingest_salesforce_data_into_amazon_s3_data_lake/'>r/dataengineering/comments/kwxahg/ingest_salesforce_data_into_amazon_s3_data_lake/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8v9vx/salary_for_business_intelligence_engineer_amazon/'>r/dataengineering/comments/l8v9vx/salary_for_business_intelligence_engineer_amazon/</a></p>
</div>
<div label="ci, 12" sentiment={0.12436868686868686}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l614pl/airflow_kubernetespodoperator_best_practices/'>r/dataengineering/comments/l614pl/airflow_kubernetespodoperator_best_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
</div>
<div label="dag, 12" sentiment={0.1888227513227513}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6vn6e/question_airflow_subdag/'>r/dataengineering/comments/l6vn6e/question_airflow_subdag/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwpvhj/how_do_you_run_an_airflow_backfill_if_the_dag_ran/'>r/dataengineering/comments/kwpvhj/how_do_you_run_an_airflow_backfill_if_the_dag_ran/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7rnri/the_new_triggerdagrunoperator_create_dag/'>r/dataengineering/comments/l7rnri/the_new_triggerdagrunoperator_create_dag/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kttzrz/deploying_apache_airflow_on_kubernetes/'>r/dataengineering/comments/kttzrz/deploying_apache_airflow_on_kubernetes/</a></p>
</div>
<div label="ssis, 12" sentiment={0.05649305555555556}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/'>r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l69j33/practicing_ssisssis_project/'>r/dataengineering/comments/l69j33/practicing_ssisssis_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l60oha/anyone_know_how_to_import_large_csv_files_into_a/'>r/dataengineering/comments/l60oha/anyone_know_how_to_import_large_csv_files_into_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9gbfx/facebook_onsite_interview/'>r/dataengineering/comments/l9gbfx/facebook_onsite_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l07wzb/any_tips_on_design_patterns_to_follow_when/'>r/dataengineering/comments/l07wzb/any_tips_on_design_patterns_to_follow_when/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ko0mr2/not_sure_where_to_go_with_my_career/'>r/dataengineering/comments/ko0mr2/not_sure_where_to_go_with_my_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/'>r/dataengineering/comments/l0mdj7/transitioning_from_traditional_etl_to_modern_data/</a></p>
</div>
<div label="talend, 12" sentiment={0.09312815656565658}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/'>r/dataengineering/comments/kijbyg/etl_what_is_the_best_tool_for_the_job_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr56hk/what_tools_do_you_use_for_er_diagrams_and_data/'>r/dataengineering/comments/kr56hk/what_tools_do_you_use_for_er_diagrams_and_data/</a></p>
</div>
<div label="rds, 11" sentiment={-0.033441558441558446}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mm95/ensuring_data_quality_in_a_data_lake_environment/'>r/dataengineering/comments/l0mm95/ensuring_data_quality_in_a_data_lake_environment/</a></p>
</div>
<div label="elt, 11" sentiment={0.023484848484848487}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/'>r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxfydi/best_airflow_design_patterns_for_extracting_200/'>r/dataengineering/comments/kxfydi/best_airflow_design_patterns_for_extracting_200/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6dj9t/data_engineering_books_for_beginers/'>r/dataengineering/comments/l6dj9t/data_engineering_books_for_beginers/</a></p>
</div>
<div label="airflow, 11" sentiment={0.07492424242424243}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/'>r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kptf00/is_the_udemy_airflow_course_worth_it/'>r/dataengineering/comments/kptf00/is_the_udemy_airflow_course_worth_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9gbfx/facebook_onsite_interview/'>r/dataengineering/comments/l9gbfx/facebook_onsite_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8k65b/is_a_masters_in_data_engineering_required/'>r/dataengineering/comments/l8k65b/is_a_masters_in_data_engineering_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
</div>
<div label="monte carlo, 11" sentiment={0.08863636363636364}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/'>r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/'>r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/'>r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/</a></p>
</div>
<div label="-&gt, 10" sentiment={0.026805555555555555}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/'>r/dataengineering/comments/kqjrff/nature_of_staging_area_in_a_dwh_for_dbt/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/'>r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
</div>
<div label="nosql, 10" sentiment={0.07486111111111111}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8lah1/nosql_vs_sql/'>r/dataengineering/comments/l8lah1/nosql_vs_sql/</a></p>
</div>
<div label="dba, 10" sentiment={0.081875}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/'>r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4976k/developers_who_have_or_are_wanting_to_become_data/'>r/dataengineering/comments/l4976k/developers_who_have_or_are_wanting_to_become_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8eviq/whats_the_difference_between_a_software_engineer/'>r/dataengineering/comments/l8eviq/whats_the_difference_between_a_software_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
</div>
<div label="azure, 9" sentiment={0.1401851851851852}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9p2ef/selecting_azuresynapse_over_aws/'>r/dataengineering/comments/l9p2ef/selecting_azuresynapse_over_aws/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/'>r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kukohv/azure_data_certification_for_backend_application/'>r/dataengineering/comments/kukohv/azure_data_certification_for_backend_application/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ku2i65/how_much_have_certs_helped_in_your_career/'>r/dataengineering/comments/ku2i65/how_much_have_certs_helped_in_your_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/'>r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
</div>
<div label="eu, 9" sentiment={0.16689814814814816}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp36go/remote_senior_data_engineer_jobs/'>r/dataengineering/comments/kp36go/remote_senior_data_engineer_jobs/</a></p>
</div>
<div label="bigquery, 9" sentiment={0.07453703703703703}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/'>r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/</a></p>
</div>
<div label="bi, 9" sentiment={0.19713403880070546}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1se0x/my_company_is_willing_to_pay_someone_to_hang_with/'>r/dataengineering/comments/l1se0x/my_company_is_willing_to_pay_someone_to_hang_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/'>r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky0crv/better_alternatives_to_zeppelin/'>r/dataengineering/comments/ky0crv/better_alternatives_to_zeppelin/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/'>r/dataengineering/comments/ks28cz/bi_engineering_vs_de_amazon_career_progression/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
</div>
<div label="hadoop, 8" sentiment={0.27196180555555555}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/'>r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/'>r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/'>r/dataengineering/comments/l72rmb/simplest_way_to_ingest_multiple_types_of_large/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/'>r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/</a></p>
</div>
<div label="meltano, 8" sentiment={0.11708333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
</div>
<div label="k8s, 8" sentiment={0.15888986013986015}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky0crv/better_alternatives_to_zeppelin/'>r/dataengineering/comments/ky0crv/better_alternatives_to_zeppelin/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l614pl/airflow_kubernetespodoperator_best_practices/'>r/dataengineering/comments/l614pl/airflow_kubernetespodoperator_best_practices/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/klvzah/were_rebranding_prestosql_as_trino/'>r/dataengineering/comments/klvzah/were_rebranding_prestosql_as_trino/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
</div>
<div label="kimball, 7" sentiment={0.10714285714285714}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/'>r/dataengineering/comments/kz7vot/how_to_make_best_of_a_6_month_de_opportunity/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kn5a53/do_i_have_what_it_takes_to_become_a_de/'>r/dataengineering/comments/kn5a53/do_i_have_what_it_takes_to_become_a_de/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/'>r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/</a></p>
</div>
<div label="data science, 7" sentiment={0.09523809523809525}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3lsqz/python_libraries_for_data_science_and_machine/'>r/dataengineering/comments/l3lsqz/python_libraries_for_data_science_and_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksr9r6/masters_to_focus_on_de/'>r/dataengineering/comments/ksr9r6/masters_to_focus_on_de/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
</div>
<div label="poc, 7" sentiment={0.12927489177489176}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/'>r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
</div>
<div label="athena, 7" sentiment={0.055194805194805206}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
</div>
<div label="sql server, 6" sentiment={0.13495370370370371}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0k2ty/what_python_library_or_libraries_can_i_use_to/'>r/dataengineering/comments/l0k2ty/what_python_library_or_libraries_can_i_use_to/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0m6j9/project_structure_and_best_practices_for/'>r/dataengineering/comments/l0m6j9/project_structure_and_best_practices_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
</div>
<div label="huginn, 6" sentiment={0.06875000000000002}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
</div>
<div label="glue, 6" sentiment={0.30576923076923074}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4wg0n/im_15_years_into_de_and_i_still_feel_like_i_know/'>r/dataengineering/comments/l4wg0n/im_15_years_into_de_and_i_still_feel_like_i_know/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/'>r/dataengineering/comments/l1co4w/the_end_of_etl_as_we_know_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
</div>
<div label="👉  , 6" sentiment={-0.10833333333333332}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/'>r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l66ek4/7_data_engineering_evangelists_to_follow/'>r/dataengineering/comments/l66ek4/7_data_engineering_evangelists_to_follow/</a></p>
</div>
<div label="udemy, 6" sentiment={0.16166666666666665}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/'>r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l69j33/practicing_ssisssis_project/'>r/dataengineering/comments/l69j33/practicing_ssisssis_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/'>r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
</div>
<div label="gui, 6" sentiment={-0.06666666666666664}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/km0roj/career_guidance_senior_etl_engineer/'>r/dataengineering/comments/km0roj/career_guidance_senior_etl_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l60oha/anyone_know_how_to_import_large_csv_files_into_a/'>r/dataengineering/comments/l60oha/anyone_know_how_to_import_large_csv_files_into_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/'>r/dataengineering/comments/kmik2x/how_do_you_manage_data_quality_in_your_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
</div>
<div label="gcp, 6" sentiment={0.253125}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/'>r/dataengineering/comments/l6kjff/how_to_set_up_a_cloud_database/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
</div>
<div label="sisense, 6" sentiment={0.08208333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/'>r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/</a></p>
</div>
<div label="ui, 6" sentiment={0.18689674523007857}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l86zta/is_there_an_easy_environment_for_me_to_test_my/'>r/dataengineering/comments/l86zta/is_there_an_easy_environment_for_me_to_test_my/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/'>r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7rnri/the_new_triggerdagrunoperator_create_dag/'>r/dataengineering/comments/l7rnri/the_new_triggerdagrunoperator_create_dag/</a></p>
</div>
<div label="faang, 6" sentiment={0.10962962962962963}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/'>r/dataengineering/comments/kqdxjo/operations_sql_python_huginn_to_engineering_sql/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/jj7w8j/faang_de_interview/'>r/dataengineering/comments/jj7w8j/faang_de_interview/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2noa4/data_engineer_interview_at_amazon/'>r/dataengineering/comments/l2noa4/data_engineer_interview_at_amazon/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8eviq/whats_the_difference_between_a_software_engineer/'>r/dataengineering/comments/l8eviq/whats_the_difference_between_a_software_engineer/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr56hk/what_tools_do_you_use_for_er_diagrams_and_data/'>r/dataengineering/comments/kr56hk/what_tools_do_you_use_for_er_diagrams_and_data/</a></p>
</div>
<div label="dwh, 5" sentiment={0.1363290043290043}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/'>r/dataengineering/comments/kvg8c0/kimball_how_to_model_game_item_purchases/</a></p>
</div>
<div label="apache airflow, 5" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/'>r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l20r42/apache_airflow_adios_subdags_welcome_taskgroups/'>r/dataengineering/comments/l20r42/apache_airflow_adios_subdags_welcome_taskgroups/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7rnri/the_new_triggerdagrunoperator_create_dag/'>r/dataengineering/comments/l7rnri/the_new_triggerdagrunoperator_create_dag/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/krlh54/introduction_to_apache_airflow/'>r/dataengineering/comments/krlh54/introduction_to_apache_airflow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kttzrz/deploying_apache_airflow_on_kubernetes/'>r/dataengineering/comments/kttzrz/deploying_apache_airflow_on_kubernetes/</a></p>
</div>
<div label="coursera, 5" sentiment={0.11613636363636362}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ku2i65/how_much_have_certs_helped_in_your_career/'>r/dataengineering/comments/ku2i65/how_much_have_certs_helped_in_your_career/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/'>r/dataengineering/comments/kxia91/your_experience_with_following_the_guided/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
</div>
<div label="zeppelin, 5" sentiment={0.2}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky0crv/better_alternatives_to_zeppelin/'>r/dataengineering/comments/ky0crv/better_alternatives_to_zeppelin/</a></p>
</div>
<div label="excel, 5" sentiment={0.22916666666666669}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/'>r/dataengineering/comments/l02cim/trying_to_break_into_data_engineering_offering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2eklf/opensource_nocode_chart_maker_from_microsoft/'>r/dataengineering/comments/l2eklf/opensource_nocode_chart_maker_from_microsoft/</a></p>
</div>
<div label="mlops, 5" sentiment={0.006136363636363637}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02n1m/crucial_differences_in_mlops_for_deep_learning/'>r/dataengineering/comments/l02n1m/crucial_differences_in_mlops_for_deep_learning/</a></p>
</div>
<div label="data engineers, 5" sentiment={0.007476190476190481}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/'>r/dataengineering/comments/l0qg2l/introduction_to_databases_for_data_engineers/</a></p>
</div>
<div label="avro, 5" sentiment={0.07027272727272728}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/'>r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/krqgpq/open_beta_kafka_ide_2020125_available_from_today/'>r/dataengineering/comments/krqgpq/open_beta_kafka_ide_2020125_available_from_today/</a></p>
</div>
<div label="big data, 5" sentiment={0.08249999999999999}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/'>r/dataengineering/comments/ky91b2/i_dont_know_what_to_do/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksfdxk/python_and_apache_parquet_yes_please/'>r/dataengineering/comments/ksfdxk/python_and_apache_parquet_yes_please/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
</div>
<div label="data, 5" sentiment={0.02}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/'>r/dataengineering/comments/kwn86r/looking_for_advice_on_my_data_engineer_resume/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr56hk/what_tools_do_you_use_for_er_diagrams_and_data/'>r/dataengineering/comments/kr56hk/what_tools_do_you_use_for_er_diagrams_and_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/hzhaqd/data_mesh_architecture_does_it_make_sense/'>r/dataengineering/comments/hzhaqd/data_mesh_architecture_does_it_make_sense/</a></p>
</div>
<div label="dataops, 5" sentiment={0.10479166666666666}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/'>r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/</a></p>
</div>
<div label="de/mle, 5" sentiment={0.24}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
</div>
<div label="apache kafka, 4" sentiment={0.0984375}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1gaue/for_those_folks_working_with_apache_kafka_this/'>r/dataengineering/comments/l1gaue/for_those_folks_working_with_apache_kafka_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l02pfd/what_are_all_the_existing_approaches_to_consume/'>r/dataengineering/comments/l02pfd/what_are_all_the_existing_approaches_to_consume/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/krqgpq/open_beta_kafka_ide_2020125_available_from_today/'>r/dataengineering/comments/krqgpq/open_beta_kafka_ide_2020125_available_from_today/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwks9e/considerations_when_moving_your_apache_kafka_to/'>r/dataengineering/comments/kwks9e/considerations_when_moving_your_apache_kafka_to/</a></p>
</div>
<div label="apache, 4" sentiment={-0.05416666666666667}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l42wfo/apache_spark_on_a_one_weak_virtual_machine/'>r/dataengineering/comments/l42wfo/apache_spark_on_a_one_weak_virtual_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l4k7kn/sending_emails_from_apache_airflow/'>r/dataengineering/comments/l4k7kn/sending_emails_from_apache_airflow/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5mbwb/new_opensource_elt_platform_airbyte_seems_to_work/'>r/dataengineering/comments/l5mbwb/new_opensource_elt_platform_airbyte_seems_to_work/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kth30n/data_engineering_slack_channels/'>r/dataengineering/comments/kth30n/data_engineering_slack_channels/</a></p>
</div>
<div label="stitchdata, 4" sentiment={0.015625}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
</div>
<div label="google, 4" sentiment={0.18104166666666666}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/'>r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/</a></p>
</div>
<div label="bq, 4" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/'>r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/'>r/dataengineering/comments/l9g2sb/what_are_your_thoughts_on_the_future_of_snowflake/</a></p>
</div>
<div label="gcs, 4" sentiment={0.03409090909090909}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l6l0lm/exploratory_project_looking_for_input/'>r/dataengineering/comments/l6l0lm/exploratory_project_looking_for_input/</a></p>
</div>
<div label="terraform, 4" sentiment={0.23333333333333334}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
</div>
<div label="gitlab, 4" sentiment={0.275}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/'>r/dataengineering/comments/kwndp0/using_cicd_to_generate_pyspark_envlibbin_for/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/'>r/dataengineering/comments/kz6pr8/i_want_to_change_my_career_from_academia_computer/</a></p>
</div>
<div label="company a, 4" sentiment={0.1673015873015873}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
</div>
<div label="databricks, 3" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/'>r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0mm95/ensuring_data_quality_in_a_data_lake_environment/'>r/dataengineering/comments/l0mm95/ensuring_data_quality_in_a_data_lake_environment/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx9kd9/emr_required_too_much_setup_and_maintenance_work/'>r/dataengineering/comments/kx9kd9/emr_required_too_much_setup_and_maintenance_work/</a></p>
</div>
<div label="imdb, 3" sentiment={0.2833333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ku2uyy/designing_a_database_from_imdb_data/'>r/dataengineering/comments/ku2uyy/designing_a_database_from_imdb_data/</a></p>
</div>
<div label="docker, 3" sentiment={-0.10416666666666667}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kptf00/is_the_udemy_airflow_course_worth_it/'>r/dataengineering/comments/kptf00/is_the_udemy_airflow_course_worth_it/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
</div>
<div label="data scientists, 3" sentiment={-0.08333333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
</div>
<div label="ai, 3" sentiment={-0.10416666666666667}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7yxp7/how_to_be_a_data_engineer/'>r/dataengineering/comments/l7yxp7/how_to_be_a_data_engineer/</a></p>
</div>
<div label="java, 3" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/'>r/dataengineering/comments/l3nze4/can_a_graduate_with_a_data_engineering_internship/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/'>r/dataengineering/comments/kw5ahx/what_do_you_think_of_talend_cloud/</a></p>
</div>
<div label="ide, 3" sentiment={0.20000000000000004}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l42fxk/creating_a_docker_container_for_running_pyspark/'>r/dataengineering/comments/l42fxk/creating_a_docker_container_for_running_pyspark/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l2wbl1/ide_to_query_presto/'>r/dataengineering/comments/l2wbl1/ide_to_query_presto/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/'>r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/</a></p>
</div>
<div label="flink, 3" sentiment={0.11666666666666665}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l68kcb/how_intuit_built_a_selfserve_stream_processing/'>r/dataengineering/comments/l68kcb/how_intuit_built_a_selfserve_stream_processing/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kxeo3g/interview_prep_big_data_patterns_what_does_this/'>r/dataengineering/comments/kxeo3g/interview_prep_big_data_patterns_what_does_this/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
</div>
<div label="cdc, 3" sentiment={0.09583333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l69j33/practicing_ssisssis_project/'>r/dataengineering/comments/l69j33/practicing_ssisssis_project/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/'>r/dataengineering/comments/kr1yvb/what_is_the_best_etlelt_tool_to_use_with_a/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knk141/spark_delta_tables/'>r/dataengineering/comments/knk141/spark_delta_tables/</a></p>
</div>
<div label="windows, 3" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5fh9i/install_dbt_on_windows_and_use_azure_sql_and/'>r/dataengineering/comments/l5fh9i/install_dbt_on_windows_and_use_azure_sql_and/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/'>r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/</a></p>
</div>
<div label="azure functions, 3" sentiment={0.3833333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1hjn8/making_a_crud_api_using_azure_functions_and_azure/'>r/dataengineering/comments/l1hjn8/making_a_crud_api_using_azure_functions_and_azure/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/'>r/dataengineering/comments/ky2pxo/what_options_do_i_have_for_career_growth/</a></p>
</div>
<div label="slack, 3" sentiment={0.21746031746031746}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/'>r/dataengineering/comments/l5ehit/what_is_the_difference_between_those_two_firms/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kth30n/data_engineering_slack_channels/'>r/dataengineering/comments/kth30n/data_engineering_slack_channels/</a></p>
</div>
<div label="ram, 3" sentiment={0.1886904761904762}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/'>r/dataengineering/comments/l8oa1w/for_those_using_airflow_for_your_eltorchestration/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/'>r/dataengineering/comments/kmndxr/sisense_legit_or_bloat/</a></p>
</div>
<div label="dev, 3" sentiment={0.006666666666666658}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l0w4w9/columnar_database_bi_developersde_how_do_you/'>r/dataengineering/comments/l0w4w9/columnar_database_bi_developersde_how_do_you/</a></p>
</div>
<div label="ds/de, 3" sentiment={0.1542592592592593}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/'>r/dataengineering/comments/kx7tul/we_dont_need_data_scientists_we_need_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/'>r/dataengineering/comments/l7lsd1/is_data_engineering_work_less_rewarding_than_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
</div>
<div label="ebs, 3" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/'>r/dataengineering/comments/kp6666/looking_for_feedback_beginner_de_project_design/</a></p>
</div>
<div label="facebook, 3" sentiment={-0.16666666666666666}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/'>r/dataengineering/comments/kv1vc5/how_to_become_a_data_engineer_in_2021/</a></p>
</div>
<div label="ami, 3" sentiment={0.10555555555555556}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kqnjbo/airflow_failsafe/'>r/dataengineering/comments/kqnjbo/airflow_failsafe/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/'>r/dataengineering/comments/kyryzq/mid_life_tech_crisis_suggestions_required/</a></p>
</div>
<div label="reddit, 3" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l1se0x/my_company_is_willing_to_pay_someone_to_hang_with/'>r/dataengineering/comments/l1se0x/my_company_is_willing_to_pay_someone_to_hang_with/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/'>r/dataengineering/comments/l66fyz/8_data_engineering_evangelists_to_follow/</a></p>
</div>
<div label="emr, 3" sentiment={-0.08333333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/'>r/dataengineering/comments/l3c12g/big_data_file_showdown_avro_vs_parquet_with_python/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/'>r/dataengineering/comments/ksvd5y/single_rdbms_becoming_the_bottleneck/</a></p>
</div>
<div label="redshift spectrum, 3" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/'>r/dataengineering/comments/ktmtqz/high_velocity_high_volume_streaming_data/</a></p>
</div>
<div label="mit, 3" sentiment={0.35555555555555557}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l8k65b/is_a_masters_in_data_engineering_required/'>r/dataengineering/comments/l8k65b/is_a_masters_in_data_engineering_required/</a></p>
</div>
<div label="software engineer, 3" sentiment={-0.016666666666666666}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/'>r/dataengineering/comments/knv5uf/data_career_choice_data_engineer_or_machine/</a></p>
</div>
<div label="airbyte, 3" sentiment={0.2929292929292929}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/'>r/dataengineering/comments/l863az/meltano_elt_for_the_devops_era_open_source/</a></p>
</div>
<div label="microsoft, 2" sentiment={0.2}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/'>r/dataengineering/comments/kt5329/microsoft_has_a_ton_of_free_courses_for_data/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwcm0w/microsoft_defender_for_linux_now_has_endpoint/'>r/dataengineering/comments/kwcm0w/microsoft_defender_for_linux_now_has_endpoint/</a></p>
</div>
<div label="🎉, 2" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwm13o/open_beta_kafka_ide_202111_being_released_today/'>r/dataengineering/comments/kwm13o/open_beta_kafka_ide_202111_being_released_today/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kwkbs7/open_beta_kafka_ide_202111_being_released_today/'>r/dataengineering/comments/kwkbs7/open_beta_kafka_ide_202111_being_released_today/</a></p>
</div>
<div label="aws redshift, 2" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
</div>
<div label="apache spark, 2" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/'>r/dataengineering/comments/kt5r4a/aws_redshift_vs_apache_spark_with_parquets_which/</a></p>
</div>
<div label="aws glue studio, 2" sentiment={0.3333333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/'>r/dataengineering/comments/kv2g33/running_serverless_spark_etl_jobs_without_having/</a></p>
</div>
<div label="oltp, 2" sentiment={0.0}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/'>r/dataengineering/comments/kpubxl/leetcode_equivalent_for_data_engineers/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
</div>
<div label="pandas, 2" sentiment={0.15833333333333333}>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/'>r/dataengineering/comments/kymv8v/cs_knowledge_required_for_data_engineering/</a></p>
    <p><a target='_blank' href='https://www.reddit.com/r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/'>r/dataengineering/comments/kv857e/designing_a_data_warehouse_from_scratch_advice/</a></p>
</div>
        </Accordion>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        @ 2021
      </footer>
    </div>
  )
}
