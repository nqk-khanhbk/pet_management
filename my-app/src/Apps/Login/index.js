import React, { useState } from 'react';
import { 
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  CssBaseline
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      remember: rememberMe
    });
    // Xử lý đăng nhập ở đây
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffcdd2', // Màu hồng nhạt
          backgroundImage: 'linear-gradient(45deg, #ffcdd2 0%, #f8bbd0 100%)', // Gradient màu hồng
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
              Đăng nhập
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      value={rememberMe} 
                      color="primary" 
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                  label="Nhớ mật khẩu"
                />
                <Link href="/forgot-password" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#e91e63',
                  '&:hover': {
                    backgroundColor: '#d81b60',
                  },
                }}
              >
                Đăng nhập
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Typography variant="body2">
                    Bạn chưa có tài khoản?{' '}
                    <Link href="/register" variant="body2" sx={{ color: '#e91e63' }}>
                      Đăng ký ngay
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;