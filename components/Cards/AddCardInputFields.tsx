import {Alert, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "@/constants/Colors";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import cardValidator from "card-validator";
import {creditCardNumberFormatter, expirationDateFormatter} from "@/utils/formatters";
import {router} from "expo-router";
import {Labels} from "@/constants/Labels";
import addCard from "@/api/omise-api";

export default function AddCardInputFields() {

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [holderName, setHolderName] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit = async (data: any) => {
    const token = await addCard(data);

    if (token) {
      Alert.alert('Success', Labels.content.cardAdded);
      router.push('/');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inputLabel}>ATM/Debit/Credit card number</Text>
        <Controller
          name={'cardNumber'}
          control={control}
          rules={{
            required: Labels.validation.cardNumber,
            validate: {
              isValid: (value: string) => {
                return (
                  (cardValidator.number(value).isValid && value.length === 19) ||
                  Labels.validation.cardNumberInvalid
                )
              },
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={{
                ...styles.input,
                ...(errors.cardNumber ? styles.inputError : {})
              }}
              placeholder={Labels.formPlaceholders.cardNumber}
              keyboardType="number-pad"
              maxLength={19}
              onBlur={onBlur}
              onChangeText={(text) => onChange(creditCardNumberFormatter(text))}
              value={value}
            />
          )}
        />
        {errors.cardNumber && <Text style={styles.errorMessage}>{errors.cardNumber.message}</Text>}

        <Text style={styles.inputLabel}>Name on Card</Text>
        <Controller
          name={'holderName'}
          control={control}
          rules={{
            required: Labels.validation.holderName,
            validate: {
              isValid: (value: string) => {
                return (
                  cardValidator.cardholderName(value).isValid ||
                  Labels.validation.holderNameInvalid
                )
              },
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={{
                ...styles.input,
                ...(errors.holderName ? styles.inputError : {})
              }}
              placeholder={Labels.formPlaceholders.holderName}
              value={value}
              maxLength={255}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.holderName && <Text style={styles.errorMessage}>{errors.holderName.message}</Text>}

        <View style={styles.inputSplit}>
          <View style={{
            width: '48%',
          }}>
            <Text style={styles.inputLabel}>Expiry date</Text>
            <Controller
              name={'expiryDate'}
              control={control}
              rules={{
                required: Labels.validation.expiryDate,
                validate: {
                  isValid: (value: string) => {
                    return (
                      cardValidator.expirationDate(value).isValid ||
                      Labels.validation.expiryDateInvalid
                    )
                  },
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={{
                    ...styles.input,
                    ...(errors.expiryDate ? styles.inputError : {})
                  }}
                  keyboardType="number-pad"
                  placeholder={Labels.formPlaceholders.expiryDate}
                  maxLength={5}
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(expirationDateFormatter(text))}
                  value={value}
                />
              )}
            />
            {errors.expiryDate && <Text style={styles.errorMessage}>{errors.expiryDate.message}</Text>}
          </View>

          <View style={{
            width: '48%'
          }}>
            <Text style={styles.inputLabel}>CVV</Text>
            <Controller
              name={'cvv'}
              control={control}
              rules={{
                required: Labels.validation.cvv,
                validate: {
                  isValid: (value: string) => {
                    return (
                      cardValidator.cvv(value).isValid ||
                      Labels.validation.cvvInvalid
                    )
                  },
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={{
                    ...styles.input,
                    ...(errors.cvv ? styles.inputError : {})
                  }}
                  keyboardType="number-pad"
                  placeholder="123"
                  maxLength={3}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.cvv && <Text style={styles.errorMessage}>{errors.cvv.message}</Text>}
          </View>
        </View>
      </View>

      <Pressable onPress={handleSubmit(onSubmit)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Card</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputLabel: {
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 56,
    borderWidth: 1.5,
    padding: 10,
    fontSize: 18,
    fontWeight: 'medium',
    lineHeight: 22,
    borderRadius: 5,
    borderColor: '#E6E3E6',
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorMessage: {
    color: Colors.error,
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    color: '#FFF',
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  inputSplit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});