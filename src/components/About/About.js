import React from 'react';
import { Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Box id="about-container" className="container" sx={{ pt: 10, pb: 16 }}>
      <Typography id="about-header" variant="h1">
        About ZenFTs
      </Typography>
      <Box id="about-p1" sx={{ py: 3 }}>
        <Typography variant="h6">
          CHIMASTERZEN is one of the streamers of all time. He is a master gamer and executes at the highest level of
          play in top Esport titles such as Old School Runescape, Clash of Clans, and even ranks #1 in the world at High
          Valyrian Word Search&#8482;. Because of his cracked gaming skills and striking charisma, he has garnered a
          massive audiance of under 1 billion viewers on twitch.
        </Typography>
      </Box>
      <Box id="about-p2" sx={{ py: 3 }}>
        <Typography variant="h6">
          For years, Chi's fans have been begging for a new way of digitally interacting their favortie streamer and his
          brand, and with the new Web 3.0 Blockchain AI technological revolution, now they can!
        </Typography>
      </Box>
      <Box id="about-p3" sx={{ py: 3 }}>
        <Typography variant="h6">
          Introducing ZenFTs! Get in on the ground floor and buy yourself an appreciable asset that is projected to
          appreciate in value by 1,000,000% in the coming years. You can really own a piece of ChiMasterZen History!
        </Typography>
      </Box>
    </Box>
  );
}
