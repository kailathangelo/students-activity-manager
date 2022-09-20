import React, { useContext } from 'react';
import AcitivityForm from './AcitivityForm';
import ActivityCard from './ActivityCard';
import { ActivityContainer, Container } from '../styles/Activity.style';
import { ActivityContext } from '../context/activityContext';
function Activities() {
  const { activityList } = useContext(ActivityContext);
  console.log(activityList);

  return (
    <Container>
      <ActivityContainer>
        {activityList.map((activity) => {
          return (
            <ActivityCard
              key={activity._id}
              id={activity._id}
              name={activity.name}
              ageGroup={activity.ageGroup}
              tutor={activity.tutor}
              fee={activity.fee}
            />
          );
        })}
      </ActivityContainer>
      <AcitivityForm />
    </Container>
  );
}

export default Activities;
