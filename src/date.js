import moment from "moment";

export const elapsedDuration = (date) => {
  const startDate = moment(date);
  const elapsedDuration = moment.duration(moment().diff(startDate));
  let formattedDuration = "moments";
  let duration = 0;
  let durationUnit = "";
  let isPluralUnit = false;

  if (elapsedDuration.asYears() > 0) {
    duration = Math.floor(elapsedDuration.asYears());
    durationUnit = "year";
    isPluralUnit = duration > 1;
  } else if (elapsedDuration.asMonths() > 0) {
    duration = Math.floor(elapsedDuration.asMonths());
    durationUnit = "month";
    isPluralUnit = duration > 1;
  } else if (elapsedDuration.asWeeks() > 0) {
    duration = Math.floor(elapsedDuration.asWeeks());
    durationUnit = "week";
    isPluralUnit = duration > 1;
  } else if (elapsedDuration.asDays() > 0) {
    duration = Math.floor(elapsedDuration.asDays());
    durationUnit = "day";
    isPluralUnit = duration > 1;
  } else if (elapsedDuration.asHours() > 0) {
    duration = Math.floor(elapsedDuration.asHours());
    durationUnit = "hour";
    isPluralUnit = duration > 1;
  } else if (elapsedDuration.asMinutes() > 0) {
    duration = Math.floor(elapsedDuration.asMinutes());
    durationUnit = "minute";
    isPluralUnit = duration > 1;
  } else {
    duration = Math.floor(elapsedDuration.asSeconds());
    durationUnit = "second";
    isPluralUnit = duration > 1;
  }

  if (duration > 0) {
    formattedDuration = `${duration} ${
      isPluralUnit ? durationUnit + "s" : durationUnit
    }`;
  }

  return formattedDuration;
};
