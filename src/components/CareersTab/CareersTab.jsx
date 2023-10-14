import { useState, useEffect } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

import { careerPositions } from '../../db/careerPositions';
import SendUsYourCV from '../DialogComponents/SendUsYourCV';
// -----------------------------------------------------------------------------
/* careerPositionsDeveloper */
const careerPositionsDeveloper = careerPositions.filter((position) => {
  return position.label === 'Developer';
});
/* careerPositionsMarketing */
const careerPositionsMarketing = careerPositions.filter((position) => {
  return position.label === 'Marketing';
});

console.log(careerPositions);
console.log(careerPositionsDeveloper);
console.log(careerPositionsMarketing);

/* CareersTab component */
export const CareersTab = () => {
  // useState hook for changing tabs
  // initialValue = 1st tab (default)
  const [tabValue, setTabValue] = useState(1);

  const handleTabValueChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  useEffect(() => {
    setTabValue('1'); // Set the initial tab value to "1" (Developer)
  }, []);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabValueChange} centered>
              {/* Tabs */}
              <Tab label='Developer' value='1' />
              <Tab label='Designer' value='2' disabled />
              <Tab label='Marketing' value='3' />
            </TabList>
          </Box>
          {/* Inside Tabs Panel */}
          {/* 1st Job Developer */}
          {careerPositionsDeveloper.map((item, index) => (
            <TabPanel
              value={item.value}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  background: '#f0f0f0'
                }
              }}
            >
              <Box>
                <Typography variant='h4' mb={1} p={3}>
                  {item.jobTitle}
                </Typography>
                <Typography variant='body2' p={3}>
                  {item.jobLocation}
                </Typography>
              </Box>
              {/* Button */}
              <Box p={3}>
                <SendUsYourCV />
              </Box>
            </TabPanel>
          ))}
          {/* 3rd Job Marketing */}
          {careerPositionsMarketing.map((item, index) => (
            <TabPanel
              value={item.value}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': {
                  background: '#f0f0f0'
                }
              }}
            >
              <Box>
                <Typography variant='h4' mb={1} p={3}>
                  {item.jobTitle}
                </Typography>
                <Typography variant='body2' p={3}>
                  {item.jobLocation}
                </Typography>
              </Box>
              {/* Button */}
              <Box p={3}>
                <SendUsYourCV />
              </Box>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
};
