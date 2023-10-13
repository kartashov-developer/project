import { Container, Typography, Divider } from "@mui/material"
import { Breadcrumb2 } from "../../../components/Breadcrumbs/Breadcrumb2"
import { Breadcrumb3 } from "../../../components/Breadcrumbs/Breadcrumb3"

import AcUnitIcon from '@mui/icons-material/AcUnit';

export const Blog = () => {
  return (
    <Container disableGutters sx={{ padding: '6px 0 64px 0' }}>
      <Breadcrumb2
        mainPage={"Blog"}
      />
      <Typography
        variant="h2"
      >
        Blog
      </Typography>
      <Typography
        variant="h5"
      >
        In our blog, you can find out:
      </Typography>
      <Typography variant="subtitle1">
        Hello
      </Typography>

      <Divider />
    </Container>
  )
}
