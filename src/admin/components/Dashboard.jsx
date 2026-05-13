import React from 'react';
import { useCurrentAdmin } from 'adminjs';
import { Box, H2, H5, Text } from '@adminjs/design-system';

const Dashboard = ({ data = {} }) => {
  const [currentAdmin] = useCurrentAdmin();
  const isAdmin = currentAdmin?.role === 'admin';
  return (
    <Box variant="grey" padding="xl">
      <H2>Welcome, {currentAdmin?.name || 'User'}!</H2>
      {isAdmin ? (
        <Box display="flex" flexDirection="row" mt="xl">
          {[
            { label: 'Total Users',    value: data.totalUsers ?? 0 },
            { label: 'Total Orders',   value: data.totalOrders ?? 0 },
            { label: 'Total Products', value: data.totalProducts ?? 0 },
          ].map(({ label, value }) => (
            <Box key={label} bg="white" p="xl" mr="lg" borderRadius="lg" minWidth="200px">
              <H5>{label}</H5>
              <Text fontSize="xl" fontWeight="bold">{value}</Text>
            </Box>
          ))}
        </Box>
      ) : (
        <Box mt="xl" bg="white" p="xl" borderRadius="lg">
          <Text>You are logged in as a regular user. Contact an admin for elevated access.</Text>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;