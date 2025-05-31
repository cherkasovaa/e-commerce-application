import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { PersonalForm } from '@/features/personalForm';
import type { PersonalEditFormProps, PersonalEditFormData } from '../model';
import { mapServerErrors } from '../model';
import { useUpdateUser } from '../model/useUpdateUser';

export const PersonalEditForm = ({
  initialData,
  onSuccess,
  onCancel,
  onError,
}: PersonalEditFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PersonalEditFormData>({
    defaultValues: {
      firstName: initialData.firstName,
      lastName: initialData.lastName,
      email: initialData.email,
      birthDate:
        typeof initialData.birthDate === 'string'
          ? new Date(initialData.birthDate)
          : initialData.birthDate,
    },
  });

  const updateUser = useUpdateUser();

  const onSubmit = (data: PersonalEditFormData) => {
    updateUser(data)
      .then(() => {
        onSuccess();
      })
      .catch((err) => {
        mapServerErrors(err);
        //render error
        onError(err);
      });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <PersonalForm
          control={control}
          fieldNames={{
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'email',
            birthDate: 'birthDate',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
            mt: 2,
          }}
        >
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button variant="outlined" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
