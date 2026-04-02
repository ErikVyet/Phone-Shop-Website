import { Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "motion/react";

function TrustSection() {
    const items = [
        { header: "Authenticity", texts: [ "100% genuine products", "Official distributor", "Brand new, sealed box" ] },
        { header: "Warranty", texts: [ "12-month official warranty", "One-to-One exchange in 7 days", "Free repair support" ] },
        { header: "Reviews", texts: [ "Star ratings", "Real comments", "Number of buyers" ] },
        { header: "Store", texts: [ "Physical address", "Photos of shop" ] },
        { header: "Shipping & Payment", texts: [ "Cash on Delivery (COD)", "Visa", "Fast delivery" ] },
        { header: "Customer Support", texts: [ "24/7 support", "Hotline number" ] }
    ];
    return (
        <Box className="w-full h-screen" alignContent={"center"}>
            <Grid className="w-5/6 h-11/12" container spacing={10} justifySelf={"center"}>
                {items.map((item, index) =>
                    <Grid key={index} size={4} className="bg-white rounded-xl shadow-xl shadow-zinc-400">
                        <motion.div>
                            <List>
                                <ListItemText>{item.header}</ListItemText>
                                {item.texts.map((text, index) =>
                                    <ListItem key={index}>{text}</ListItem>
                                )}
                                <ListItemIcon>
                                    
                                </ListItemIcon>
                            </List>
                        </motion.div>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default TrustSection;