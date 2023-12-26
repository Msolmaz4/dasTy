import { Card, Metric, Text, Flex, BadgeDelta, Grid } from "@tremor/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSales from "../hooks/useSales";
import usePurchases from "../hooks/usePurchases";


export default function HomeCard() {
  const { sales } = useSelector((state) => state.sales);
  const { purchases } = useSelector((state) => state.purchases);
  const sal = sales?.reduce((a, b) => a + Number(b.quantity * b.price), 0);
  const pur = purchases?.reduce((a, b) => a + Number(b.price * b.quantity), 0);
  const cash = pur - sal;
 
   const {alleSales } =useSales()
   const {allePurchases} = usePurchases()


  useEffect(()=>{
alleSales()
allePurchases()
  },[])
  const categories = [
    {
      title: "Sales",
      metric: `${sal}`,
      metricPrev: "$ 9,456",
      delta: "34.3%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Casch",
      metric: `${cash}`,
      metricPrev: "$ 45,564",
      delta: "10.9%",
      deltaType: "moderateDecrease",
    },
    {
      title: "Purchases",
      metric: `${pur}`,
      metricPrev: "856",
      delta: "25.3%",
      deltaType: "moderateIncrease",
    },
  ];

  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
