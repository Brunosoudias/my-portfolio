import { Container, Grid2, styled, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
	const StyledHero = styled("div")(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		height: "100vh",
    display: "flex",
    alignItems: "center",

	}));

	const StyledImg = styled("img")(() => ({
		width: "80%",
		borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
	}));

	return (
		<>
			<StyledHero>
				<Container maxWidth="lg">
					<Grid2 container spacing={2}>
						<Grid2 size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground/>
                </Box>
                <Box position="relative" textAlign="center">
                 <StyledImg src={Avatar} />

                </Box>

              </Box>
							
						</Grid2>
						<Grid2 size={{ xs: 12, md: 7 }}>
							<Typography
								color="primary.contrastText"
								variant="h1"
								textAlign="center"
                pb="2"
							>
								Bruno Dias
							</Typography>
							<Typography
								color="primary.contrastText"
								variant="h2"
								textAlign="center"

							>
								I'm a Developer Full stack
							</Typography>

							<Grid2 container display="flex" justifyContent="center" spacing={3} pt="3">
								<Grid2
									size={{ xs: 12, md: 4 }}
									display="flex"
									justifyContent="center"
								>
									<StyledButton>
										<DownloadIcon />
										<Typography>Download CV</Typography>
									</StyledButton>
								</Grid2>

								<Grid2
									size={{ xs: 12, md: 4 }}
									display="flex"
									justifyContent="center"
								>
									<StyledButton>
										<EmailIcon />
										<Typography>
                    Contact me
                    </Typography>
									</StyledButton>
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
