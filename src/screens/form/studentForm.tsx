import { useContext, useState } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import { 
  View, Text, TextInput, TouchableOpacity, 
  Alert, ActivityIndicator, ScrollView 
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

export default function StudentForm() {
  const { authState, setUserProfile } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    gender: "",
    address_info: {
      region: "",
      zone: "",
      city: "",
      kebele_no: ""
    }
  });

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.first_name || !formData.last_name || !formData.date_of_birth || 
        !formData.gender || !formData.address_info.city) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.8.111:57000/api/v1/user/student/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authState?.access_token}`
          }
        }
      );

      if (response.data) {
        await setUserProfile?.(response.data);
        Alert.alert("Success", "Profile created successfully!");
        router.replace("/(protected)/(tabs)/analytics");
      }
    } catch (error: any) {
      Alert.alert("Error", error.response?.data?.msg || "Failed to create profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-6">Student Profile</Text>
      
      <View className="space-y-4">
        <View>
          <Text className="text-gray-700 mb-1">First Name *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.first_name}
            onChangeText={(text) => setFormData({...formData, first_name: text})}
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Middle Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.middle_name}
            onChangeText={(text) => setFormData({...formData, middle_name: text})}
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Last Name *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.last_name}
            onChangeText={(text) => setFormData({...formData, last_name: text})}
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Date of Birth * (YYYY-MM-DD)</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.date_of_birth}
            onChangeText={(text) => setFormData({...formData, date_of_birth: text})}
            placeholder="2005-08-15"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Phone Number</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.phone_number}
            onChangeText={(text) => setFormData({...formData, phone_number: text})}
            keyboardType="phone-pad"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Gender *</Text>
          <View className="border border-gray-300 rounded-lg">
            <Picker
              selectedValue={formData.gender}
              onValueChange={(value) => setFormData({...formData, gender: value})}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        <Text className="text-xl font-semibold mt-4">Address Information</Text>

        <View>
          <Text className="text-gray-700 mb-1">Region</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.address_info.region}
            onChangeText={(text) => setFormData({
              ...formData, 
              address_info: {...formData.address_info, region: text}
            })}
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Zone</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.address_info.zone}
            onChangeText={(text) => setFormData({
              ...formData, 
              address_info: {...formData.address_info, zone: text}
            })}
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">City *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.address_info.city}
            onChangeText={(text) => setFormData({
              ...formData, 
              address_info: {...formData.address_info, city: text}
            })}
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Kebele No</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-3"
            value={formData.address_info.kebele_no}
            onChangeText={(text) => setFormData({
              ...formData, 
              address_info: {...formData.address_info, kebele_no: text}
            })}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={isLoading}
          className="bg-blue-500 p-4 rounded-xl mt-6 mb-10"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-semibold text-lg">
              Create Profile
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
