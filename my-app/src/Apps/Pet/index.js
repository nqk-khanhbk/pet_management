import { Box, useTheme,Button} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import SendIcon from '@mui/icons-material/Send';
import Breadcrumb from "../../components/BreadCrumb";
// import { useEffect,useState } from "react";
import { mockPet as data } from "../../data/petData"; 
function Pet (){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const breadcrumbItems = [
        { label: 'Dashboard', path: '/' },
        { label: 'Pet', path: null }
    ];
    // const {data,setData} = useState([]);
    // useEffect(()=>{
    //     data=data
    // })
    console.log(data)
    
    return (
        <>
        <Breadcrumb items={breadcrumbItems} />
        <Box m="15px 20px">      
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="PET" subtitle="Welcome to your pet" />
                <Box>
                    <Button color= {colors.primary[400]} variant="contained" endIcon={<SendIcon />} >
                        Tạo mới
                    </Button>
                </Box>
            </Box>
        </Box>
        </>
    )
}
export default Pet;