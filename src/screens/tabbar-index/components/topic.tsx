import { Avatar } from '@/components';
import { ITopic } from '@/interfaces/topic';
import { Colors } from '@/theme/colors';
import Common from '@/theme/common';
import Images from '@/theme/images';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  item: ITopic;
}

const Topic = ({ item: topic }: IProps) => {
  const navigation = useNavigation();

  const openTopic = (topicId: number, title: string) => {
    navigation.navigate('topic', { topicId, title });
  };

  return (
    <TouchableOpacity
      style={styles.topicItem}
      onPress={() => openTopic(topic.id, topic.title)}>
      <View style={styles.topicTop}>
        <View style={styles.topicTopLeft}>
          <Avatar
            user={topic.member}
            size={32}
            source={{ uri: topic.member.avatar_normal }}
          />
          <View style={styles.topicInfo}>
            <Text>{topic.member.username}</Text>
            <View style={styles.topicInfoBottom}>
              <Text style={[Common.node, Common.nodeSmall]}>
                {topic.node.title}
              </Text>
              <View style={styles.topicAttr}>
                <Image
                  style={styles.topicAttrIcon}
                  source={Images.timeCycleGrey}
                />
                <Text style={styles.topicAttrText}>
                  {dayjs.unix(topic.created).fromNow()}
                </Text>
              </View>
              <View style={styles.topicAttr}>
                <Image
                  style={styles.topicAttrIcon}
                  source={Images.moreCycleGrey}
                />
                <Text style={styles.topicAttrText}>{topic.replies}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.topicTitle}>{topic.title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Topic);

const styles = StyleSheet.create({
  topicItem: {
    marginVertical: 12,
  },
  topicTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicTopLeft: {
    flexDirection: 'row',
  },
  topicInfo: {
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  topicInfoBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicTitle: {
    fontSize: 16,
    marginTop: 8,
  },
  topicAttr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  topicAttrIcon: {
    width: 12,
    height: 12,
  },
  topicAttrText: {
    fontSize: 10,
    color: Colors.secondaryText,
    marginLeft: 2,
  },
});