import React from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PastExamTable = ({ examDetail }) => {
    // Check if examDetail is defined before mapping
    if (!examDetail || examDetail.length === 0) {
        return (
            <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="Past Exams" subtitle="View logs of past exams" />
                </Box>
                <p>No data available.</p>
            </Box>
        );
    }

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Past Exams" subtitle="View logs of past exams" />
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Student Name</TableCell>
                            <TableCell>CV Based</TableCell>
                            <TableCell>Mobile Detected</TableCell>
                            <TableCell>Suspicious Act</TableCell>
                            <TableCell>Noise Detected</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {examDetail.map((row) => (
                            <TableRow key={row.sid}>
                                <TableCell>{row.sid}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.cv_based_warnings}</TableCell>
                                <TableCell>{row.mobile_detected}</TableCell>
                                <TableCell>{row.system_warnings}</TableCell>
                                <TableCell>{row.noise_warnings}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PastExamTable;