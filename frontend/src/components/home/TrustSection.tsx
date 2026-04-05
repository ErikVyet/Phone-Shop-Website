import { LocalShipping, Paid, Reviews, Security, Store, SupportAgent } from "@mui/icons-material";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { motion } from "motion/react";

function TrustSection() {
    const items = [
        { header: "Authenticity", icon: <Security className="size-10!" />, texts: ["100% genuine products", "Official distributor", "Brand new, sealed box"] },
        { header: "Warranty", icon: <Paid className="size-10!" />, texts: ["12-month official warranty", "One-to-One exchange in 7 days", "Free repair support"] },
        { header: "Reviews", icon: <Reviews className="size-10!" />, texts: ["Star ratings", "Real comments", "Number of buyers"] },
        { header: "Store", icon: <Store className="size-10!" />, texts: ["Physical address", "Photos of shop"] },
        { header: "Shipping & Payment", icon: <LocalShipping className="size-10!" />, texts: ["Cash on Delivery (COD)", "Visa", "Fast delivery"] },
        { header: "Customer Support", icon: <SupportAgent className="size-10!" />, texts: ["24/7 support", "Hotline number"] }
    ];
    return (
        <Box className="w-full h-screen" alignContent={"center"}>
            <Grid className="w-5/6 h-11/12" container rowSpacing={6} columnSpacing={10} justifySelf={"center"}>
                {items.map((item, index) =>
                    <Grid component={motion.div} key={index} size={4} className={`p-1 ${index < items.length / 2 ? 'bg-linear-to-b' : 'bg-linear-to-t'} from-blue-500 to-blue-300 rounded-xl shadow-xl shadow-zinc-400`} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        <Box className="w-full h-full bg-white rounded-xl">
                            <List>
                                <ListItemIcon className="w-full place-content-center">
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className="font-semibold! text-xl! text-center">{item.header}</Typography>
                                </ListItemText>
                                {item.texts.map((text, index) =>
                                    <ListItem key={index}>{text}</ListItem>
                                )}
                            </List>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default TrustSection;