import { Box, Button, Container, Typography } from "@mui/material";

function MarketplaceSection() {
    return (
        <Box className="py-24 bg-blue-600 text-white text-center">
            <Container maxWidth="sm">
                <Typography variant="h3" className="font-bold mb-6">Your next upgrade is waiting.</Typography>
                <Typography className="text-blue-100 mb-10 text-lg">
                    Join hundreds of users who are already trading smarter.
                    Clear out your drawer or find your next favorite device today.
                </Typography>
                <Box className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="contained" className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-4 rounded-xl font-bold normal-case">
                        Start Selling
                    </Button>
                    <Button variant="outlined" className="border-white text-white hover:bg-blue-700 px-10 py-4 rounded-xl font-bold normal-case">
                        Browse Marketplace
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default MarketplaceSection;