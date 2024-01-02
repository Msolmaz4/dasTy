import { Grid } from "@mui/material";
import { AreaChart, Card, Title } from "@tremor/react";
import { useSelector } from "react-redux";

const chartdata3 = [
  {
    date: "Jan 23",
    "Distance Running": 167,
  },
  {
    date: "Feb 23",
    "Distance Running": 125,
  },
  {
    date: "Mar 23",
    "Distance Running": 156,
  },
  {
    date: "Apr 23",
    "Distance Running": 165,
  },
  {
    date: "May 23",
    "Distance Running": 153,
  },
  {
    date: "Jun 23",
    "Distance Running": 124,
  },
  {
    date: "Jul 23",
    "Distance Running": 164,
  },
  {
    date: "Aug 23",
    "Distance Running": 123,
  },
  {
    date: "Sep 23",
    "Distance Running": 132,
  },
];

const valueFormatter = function (number) {
  return "€" + new Intl.NumberFormat("de").format(number).toString();
};


const HomeAreaCard = () => {
  const {purchases} = useSelector(state=>state.purchases)
  const{sales} =useSelector(state=>state.sales)
 
 const  purData = purchases?.map((item)=>({
    
      date: new Date(item.createdAt).toLocaleString("de-DE"),
      purchase: item.amount,
    
  }))
 const  salesData = sales?.map((item)=>({
    
      date: new Date(item.createdAt).toLocaleString("de-DE"),
      purchase: item.amount,
    
  }))
  return (
  
    
      <Grid container mt={3}  spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Sales</Title>
          <AreaChart
            className="h-72 mt-4"
            data={salesData}
            index="date"
            categories={["sale"]}
            colors={["lime"]}
            valueFormatter={valueFormatter}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Purchases</Title>
          <AreaChart
            className="h-72 mt-4"
            data={purData}
            index="date"
            categories={["purchase"]}
            colors={["amber"]}
            valueFormatter={valueFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  
  );
};

export default HomeAreaCard;
