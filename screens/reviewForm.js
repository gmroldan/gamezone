import React from 'react'
import { Formik } from 'formik'
import { View, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { TextInput } from 'react-native-gesture-handler'

export default function ReviewForm() {
  return (
    <View style={ globalStyles.container }>
      <Formik
        initialValues={ { title: '', body: '', rating: '' } }
        onSubmit={ values => {
          console.log(values);
        } }>
        { props => (
          <View>
            <TextInput 
              style={ globalStyles.input }
              placeholder='Review title'
              onChangeText={ props.handleChange('title') } 
              value={ props.values.title }
            />

            <TextInput 
              multiline
              style={ globalStyles.input }
              placeholder='Review body'
              onChangeText={ props.handleChange('body') } 
              value={ props.values.body }
            />

            <TextInput 
              style={ globalStyles.input }
              placeholder='Review rating'
              onChangeText={ props.handleChange('rating') } 
              value={ props.values.rating }
              keyboardType='numeric'
            />

            <Button title='submit' color='maroon' onPress={ props.handleSubmit }/>
          </View>
        )}
      </Formik>
    </View>
  )
}
