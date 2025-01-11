import { Button, Container, Grid2, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
	const StyledHero = styled("div")(() => ({
		backgroundColor: "black",
		height: "100vh",
	}));

	const StyledImg = styled("img")(() => ({
		width: "30%",
		borderRadius: "50%",
	}));

	return (
		<>
			<StyledHero>
				<Container maxWidth='lg'>
					<Grid2 container spacing={2}>
						<Grid2 size={{ xs: 12, md: 4 }}>
							<StyledImg src={Avatar} />
						</Grid2>
						<Grid2 size={{ xs: 12, md: 8 }}>
							<Typography color="primary" variant="h1" textAlign="center">
								Bruno Dias
							</Typography>
							<Typography color="primary" variant="h2" textAlign="center">
								I'm a Developer Full stack
							</Typography>

							<Grid2 container display='flex' justifyContent='center'>

                <Grid2 size={{xs: 12, md: 4}} display="flex" justifyContent='center'>
									<Button>
										<DownloadIcon />
										Download CV
									</Button>
								</Grid2>

								<Grid2 size={{xs: 12, md: 4}} display="flex" justifyContent='center'>
									<Button>
										<EmailIcon />
										Contact me
									</Button>
								</Grid2>

							</Grid2>

						</Grid2>
					</Grid2>
				</Container>
			</StyledHero>
		</>
	);
};

export default Hero;
