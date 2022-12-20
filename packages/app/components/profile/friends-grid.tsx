import React from 'react'
import { ShortUser } from 'app/generates'
import { useProfileLink } from 'app/hooks/profile-link'
import { Row, Text, Column, Button, Image } from 'native-base'
import { useMemo } from 'react'
import { Link as SolitoLink } from 'solito/link'

type ProfileFriendsProps = {
  username: string
  friends?: ShortUser[]
}

function ProfileFriends({ friends, username }: ProfileFriendsProps) {
  const profileLink = useProfileLink(username)

  const profileFriendsLink = useMemo(
    () => profileLink + '/friends',
    [profileLink]
  )

  return (
    <Column bg="#1A2235" h="260" py={4} >
      <Column mb="12" mt="0">
        <Row ml="6">
          <SolitoLink href="/">
            <Text fontSize="20" bold mr="1">
              Friends
            </Text>
          </SolitoLink>
          <Text color="#3ABEFE" fontSize="20" bold>
            {friends?.length ?? 0}
          </Text>
        </Row>
      </Column>

      <Row space="12" flexWrap="wrap" justifyContent="center">
        {friends?.map(({ name, username, profileImage }) => (
          <Column key={username} borderRadius="md" alignItems="center" mb="2">
            <SolitoLink href={useProfileLink(username)}>
              <Image
                source={{
                  uri:
                    profileImage?.url ||
                    'https://pokersocial-public.s3.ap-south-1.amazonaws.com/blank-avatar.png',
                }}
                width={109}
                height={100}
                borderWidth="2"
                borderRadius={20}
                alt="card"
                maxW="200px"
              />
            </SolitoLink>
            <Text color="white" bold fontSize="16">
              {name ?? username}
            </Text>
          </Column>
        ))}
      </Row>

      <Row justifyContent="center" mt="6" mb="10" top={9} right={2}  >
        <Button rounded="3xl" size="sm" px={2} bg="#3ABEFE" _hover={{ bg: '#007EBB' }}>
          {/* <SolitoLink href={profileFriendsLink}> */}
          <SolitoLink href="/friends">
            <Text fontSize={14} bold   >
              View All Friends
            </Text>
          </SolitoLink>
        </Button>
      </Row>
    </Column>
  )
}

export default ProfileFriends
