import { Box, Container, Grid, TextField, Button, Typography, Alert, Snackbar } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await emailjs.send(
          'service_mmlw87b', // Replace with your EmailJS service ID
          'template_dz2un2o', // Replace with your EmailJS template ID
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            to_name: 'Fabio', // Your name
          },
          'rHAHBrdiT2zOLWEnG' // Replace with your EmailJS public key
        );

        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        resetForm();
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'Failed to send message. Please try again.',
          severity: 'error'
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box component="section" py={8} bgcolor="primary.main" color="primary.contrastText" id="contact">
      <Container maxWidth="md">
        <Typography variant="h2" textAlign="center" mb={4}>
          Contact Me
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                  },
                  '& .MuiInputLabel-root': { color: 'primary.contrastText' },
                  '& .MuiOutlinedInput-input': { color: 'primary.contrastText' },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                  },
                  '& .MuiInputLabel-root': { color: 'primary.contrastText' },
                  '& .MuiOutlinedInput-input': { color: 'primary.contrastText' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="message"
                label="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                  },
                  '& .MuiInputLabel-root': { color: 'primary.contrastText' },
                  '& .MuiOutlinedInput-input': { color: 'primary.contrastText' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                startIcon={<Send />}
                disabled={formik.isSubmitting}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;