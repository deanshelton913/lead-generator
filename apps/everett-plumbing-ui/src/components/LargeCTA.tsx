"use client"
import { Button, Hidden, Paper } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import theme from "@/theme";
import FormDialog from "./FormDialog";
import { PHONE_NUMBERS } from "@/globals";
import { formatPhoneNumber } from "@/utils";




export const LargeCTA = () => (
    <Paper sx={{ p: 1, mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }} elevation={8}>

        <Button
            sx={{
                // width: '100%',
                backgroundColor: theme.palette.success.main,
                my: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
            href={`tel:${PHONE_NUMBERS['everett-plumbers']}`}
        >

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <div>
                    {formatPhoneNumber(PHONE_NUMBERS['everett-plumbers'])}
                </div>
            </div>
        </Button>
        <FormDialog inline={true} />
    </Paper>
)