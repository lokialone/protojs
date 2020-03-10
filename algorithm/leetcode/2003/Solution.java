import java.util.Arrays;
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int len1 = s1.length();
        int len2 = s2.length();
        int[] c1 = new int[26];
        int[] c2 = new int[26];
         for(char c : s1.toCharArray())
            c1[c-'a']++;
        for(int i = 0; i < len2; i++) {
            if (i>=len1) {
                --c2[s2.charAt(i-len1) - 'a'];
            }
            c2[s2.charAt(i) -'a']++;
            if (Arrays.equals(c1,c2)) return true;
        }
        return false;
    }
}

