
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getLaunches } from "../../services-data/launches";

export default function Launches() {
  const [launches, setLaunches] = React.useState([]);

  React.useEffect(() => {
    getLaunches().then((launches) => setLaunches(launches));
  }, []);

  return (
    <section className="flex flex-wrap gap-6 justify-center">
      {launches.map((launch) =>
      (
        <Card key={launch.id} sx={{ maxWidth: 480 }}>
          <CardMedia
            component="img"
            height="140"
            image={launch.links.patch.small}
            alt="green iguana"
            className="w-full h-54 object-contain p-2"
          />
          <CardContent>
            <h3 className="text-lg font-bold">{launch.name}</h3>
            <p className="text-sm">{launch.date}</p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )
      )}
    </section>
  );
}